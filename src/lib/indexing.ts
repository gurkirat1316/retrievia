import 'dotenv/config';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { OpenAIEmbeddings } from '@langchain/openai';
import { QdrantVectorStore } from '@langchain/qdrant';
import path from 'path';

export const indexDocument = async (filePath: string) => {
    const loader = new PDFLoader(filePath);

    // Load document
    const docs = await loader.load();

    const fileName = path.basename(filePath);

    // Chunk the document (optional)
    const chunkSize = 1000;
    const chunkedDocs = docs.flatMap(doc => {
        const chunks = [];
        let docText = doc.pageContent;
        for (let i = 0; i < docText.length; i += chunkSize) {
            chunks.push({
                pageContent: docText.substring(i, i + chunkSize),
                // metadata: doc.metadata,
                metadata: {
                    ...doc.metadata,
                    fileName, // add fileName metadata
                },
            });
        }
        return chunks;
    });

    const embeddings = new OpenAIEmbeddings({
        model: 'text-embedding-3-large', // Choose your model here
    });

    const vectorStore = await QdrantVectorStore.fromDocuments(chunkedDocs, embeddings, {
        url: process.env.QDRANT_URL!,
        apiKey: process.env.QDRANT_API_KEY!,
        collectionName: 'ragger', // Collection name in Qdrant
    });
};
