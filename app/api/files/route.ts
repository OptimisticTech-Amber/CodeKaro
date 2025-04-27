import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

interface FileRequestBody {
  id?: string;
  name?: string;
  content?: string;
}
interface FileCreateRequest {
  name: string;
  content: string;
}

interface FileUpdateRequest {
  id: string;
  name?: string;
  content?: string;
}

// Fetch all files (GET /api/files)
export async function GET(): Promise<Response> {
  try {
    const files = await db.file.findMany({});
    return NextResponse.json(files, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}

// Create a new file (POST /api/files)
export async function POST(req: Request): Promise<Response> {
  try {
    // Parse the request body
    const { name, content }: FileRequestBody = await req.json();
    if (!name || !content) {
      throw new Error("Missing required fields: name or content");
    }

    // Log the incoming data for debugging
    console.log("Creating file with data:", { name, content });

    // Create a new file in the database
    const newFile = await db.file.create({
      data: {
        name,
        content,
      },
    });

    // Return the newly created file
    return NextResponse.json(newFile, { status: 201 });
  } catch (error: any) {
    // Log the error for debugging
    console.error("Error creating file:", error);

    return NextResponse.json(
      { error: "Failed to create file", message: error.message },
      { status: 400 }
    );
  }
}

// Update file content (PUT /api/files)
export async function PUT(req: Request): Promise<Response> {
  try {
    // Ensure DB connection
    const { id, name, content }: FileRequestBody = await req.json();

    // Update file name or content if provided
    const updatedFile = await db.file.update({
      where: { id },
      data: { ...(name && { name }), ...(content && { content }) },
    });

    if (!updatedFile) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return NextResponse.json(updatedFile, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update file" },
      { status: 400 }
    );
  }
}

// Delete a file (DELETE /api/files)
export async function DELETE(req: Request): Promise<Response> {
  try {
    const { id }: FileRequestBody = await req.json();

    await db.file.delete({ where: { id } });
    return NextResponse.json(
      { message: "File deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 400 }
    );
  }
}
