import { promises as fs } from 'fs';
import path from 'path';
import { indexDocument } from '@/lib/indexing';
import os from 'os';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get('file') as File | null;

    if (!file) {
      return Response.json({ message: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // const uploadDir = path.join(process.cwd(), 'uploads');
    // await fs.mkdir(uploadDir, { recursive: true });

    // const filePath = path.join(uploadDir, file.name);

    // await fs.writeFile(filePath, buffer);

    // await indexDocument(filePath);
    // Create a temporary directory
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'upload-'));
    const tmpFilePath = path.join(tmpDir, file.name);

    // Write the file temporarily
    await fs.writeFile(tmpFilePath, buffer);

    // Call your existing indexDocument function
    await indexDocument(tmpFilePath);

    // Delete the temporary file and folder
    await fs.unlink(tmpFilePath);
    await fs.rmdir(tmpDir);

    return Response.json({ message: 'File uploaded and indexed successfully!' });
  } catch (error: unknown) {
    console.error("Error during upload:", error);

    const message = error instanceof Error ? error.message : "Error during upload";

    return Response.json(
      { message, error: message },
      { status: 500 }
    );
  }

}
