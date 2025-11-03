import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const BACKEND_API_URL = process.env.BACKEND_API_URL;
const BACKEND_API_BEARER_TOKEN = process.env.BACKEND_API_BEARER_TOKEN;

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Validate environment variables
    if (!BACKEND_API_URL || !BACKEND_API_BEARER_TOKEN) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { id } = await params;

    // Forward request to backend with bearer token
    const response = await fetch(`${BACKEND_API_URL}/checks/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${BACKEND_API_BEARER_TOKEN}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to delete subscription" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error deleting check:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
