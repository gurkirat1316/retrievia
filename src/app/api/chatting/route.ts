import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { OpenAIEmbeddings } from '@langchain/openai';
import { QdrantVectorStore } from '@langchain/qdrant';
import OpenAI from 'openai';
import 'dotenv/config';

// const client = new OpenAI();
const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
});

interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

interface RequestBody {
    fullConversation: Message[];
}

export async function POST(request: Request) {
    try {
        const body: RequestBody = await request.json();
        const { fullConversation } = body;

        if (!Array.isArray(fullConversation) || fullConversation.length === 0) {
            return NextResponse.json(
                { error: 'fullConversation must be non-empty array' },
                { status: 400 }
            );
        }

        const lastUserMsg = fullConversation
            .slice()
            .reverse()
            .find((m) => m.role === 'user')?.content;

        if (!lastUserMsg) {
            return NextResponse.json(
                { error: 'No user message found in conversation' },
                { status: 400 }
            );
        }

        const embeddings = new OpenAIEmbeddings({
            model: 'text-embedding-3-large',
        });

        const vectorStore = await QdrantVectorStore.fromExistingCollection(
            embeddings,
            {
                url: process.env.QDRANT_URL!,
                apiKey: process.env.QDRANT_API_KEY!,
                collectionName: 'ragger',
            }
        );

        const retriever = vectorStore.asRetriever({ k: 5 });
        const relevantChunks = await retriever.invoke(lastUserMsg);
        const systemPrompt = `
            You are an AI assistant who helps resolving user queries based on the context available to you from a document (with content and page numbers).
            Only answer based on the available context from the document.

            Context:
            ${JSON.stringify(relevantChunks)}`;

        const chatResponse = await client.chat.completions.create({
            // model: 'gpt-4.1-mini',
            model: 'gemini-2.0-flash',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: lastUserMsg }
            ]
        });

        const answer = chatResponse.choices?.[0]?.message?.content ?? 'No answer';
        return NextResponse.json({ content: answer });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('API /chatting error:', message);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}