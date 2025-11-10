// app/api/uploadText/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { Document } from "@langchain/core/documents";

// Split text into chunks
function chunkText(text: string, chunkSize = 500, overlap = 50) {
    const chunks: string[] = [];
    let start = 0;

    while (start < text.length) {
        const end = Math.min(start + chunkSize, text.length);
        chunks.push(text.slice(start, end));
        start += chunkSize - overlap;
    }

    return chunks;
}

// Index chunks into Qdrant
async function indexChunks(chunks: string[], fileName: string) {
    const embeddings = new OpenAIEmbeddings({ model: "text-embedding-3-large" });

    const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
        url: process.env.QDRANT_URL!,
        apiKey: process.env.QDRANT_API_KEY!,
        collectionName: "ragger",
    });

    const documents = chunks.map((textChunk, i) =>
        new Document({
            pageContent: textChunk,
            metadata: {
                fileName,
                chunkIndex: i,
                sourceType: "text",
            },
        })
    );

    await vectorStore.addDocuments(documents);
}

// API Route
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { text, fileName } = body;

        if (!text || !fileName) {
            return NextResponse.json(
                { message: "Text and fileName are required" },
                { status: 400 }
            );
        }

        // Save text to local file (optional, if you want a local copy)
        // const uploadDir = path.join(process.cwd(), "uploads");
        // await fs.mkdir(uploadDir, { recursive: true });
        // const filePath = path.join(uploadDir, fileName);
        // await fs.writeFile(filePath, text);

        // Chunk and index
        const chunks = chunkText(text, 500, 50);
        await indexChunks(chunks, fileName);

        return NextResponse.json({ message: "Text uploaded and indexed successfully!" });
    } catch (error: unknown) {
        console.error("Error uploading text:", error);

        const message = error instanceof Error ? error.message : "Error during upload";

        return NextResponse.json(
            { message: "Error during upload", error: message },
            { status: 500 }
        );
    }
}
