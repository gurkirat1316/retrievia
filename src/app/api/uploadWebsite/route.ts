// app/api/extractFromUrl/route.ts
import { NextResponse } from "next/server";
import { HTMLWebBaseLoader } from "@langchain/community/document_loaders/web/html";
import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { Document } from "@langchain/core/documents";

export async function POST(req: Request) {
    try {
        const { url, fileName } = await req.json();

        if (!url || !fileName) {
            return NextResponse.json(
                { message: "Both url and fileName are required" },
                { status: 400 }
            );
        }

        const loader = new HTMLWebBaseLoader(url);
        const docs = await loader.load();
        const text = docs.map((d) => d.pageContent).join("\n");

        const chunkSize = 5000;
        const overlap = 50;
        const chunks: Document[] = [];

        for (let i = 0; i < text.length; i += chunkSize - overlap) {
            const chunkText = text.slice(i, i + chunkSize);
            chunks.push(
                new Document({
                    pageContent: chunkText,
                    metadata: {
                        fileName,
                        sourceType: "url",
                        sourceUrl: url,
                        chunkIndex: chunks.length,
                    },
                })
            );
        }

        // Create embeddings
        const embeddings = new OpenAIEmbeddings({
            model: "text-embedding-3-large",
        });

        // Store in Qdrant
        const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
            url: process.env.QDRANT_URL!,
            apiKey: process.env.QDRANT_API_KEY!,
            collectionName: "ragger",
        });

        await vectorStore.addDocuments(chunks);

        return NextResponse.json({
            message: "Website content indexed successfully!",
            totalChunks: chunks.length,
        });
    } catch (error: unknown) {
        console.error("Error processing URL:", error);

        const message = error instanceof Error ? error.message : "Error processing URL";

        return NextResponse.json(
            { message: "Error processing URL", error: message },
            { status: 500 }
        );
    }
}
