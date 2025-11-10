import { NextResponse } from "next/server";
import OpenAI from "openai";
import 'dotenv/config';
import { OpenAIEmbeddings } from '@langchain/openai';
import { QdrantVectorStore } from '@langchain/qdrant';

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
});

export async function POST(req: Request) {
    try {
        const { fileName } = await req.json();
        console.log("file", fileName)

        if (!fileName) {
            return NextResponse.json(
                { error: "Missing fileName" },
                { status: 400 }
            );
        }

        const SYSTEM_PROMPT = `
            You are an AI assistant who generates summary of the pdf file given to you and helps resolving user query based on the context available to you from a PDF file with the content and page number. Only ans based on the available context from file only.

            Output Rules:
                Provide the summary with heading and sub-headings in a neat and clean format. Provide the summary in two or three paragraphs.
        `;

        // Ready the client OpenAI Embedding Model
        const embeddings = new OpenAIEmbeddings({
            model: 'text-embedding-3-large'
        });

        const vectorStore = await QdrantVectorStore.fromExistingCollection(
            embeddings,
            {
                url: 'http://localhost:6333',
                collectionName: 'ragger',
            }
        );

        // const retriever = vectorStore.asRetriever({ k: 13 });
        const retriever = vectorStore.asRetriever({
            k: 30,
            filter: {
                must: [
                    {
                        key: "metadata.fileName",
                        match: {
                            value: fileName,
                        },
                    },
                ],
            },
        });
        console.log("ret", retriever)
        const relevantDocs = await retriever.invoke("Summarize this document");
        console.log("docs", relevantDocs)

        // Combine all chunks into one big context string
        const context = relevantDocs.map((doc) => doc.pageContent).join("\n\n");
        console.log("context", context)

        const response = await client.chat.completions.create({
            model: 'gemini-2.0-flash',
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                {
                    role: "user",
                    content: `Here is the document content:\n\n${context}`,
                },
            ],
        });
        console.log("response", response)
        const summary = response.choices[0]?.message?.content || "No summary generated.";

        return NextResponse.json({ summary });

    } catch (error: any) {
        console.error("Error generating summary:", error);
        return NextResponse.json(
            { error: error.message || "Failed to generate summary" },
            { status: 500 }
        );
    }
}