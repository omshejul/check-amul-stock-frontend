import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL = process.env.BACKEND_API_URL;
const BACKEND_API_BEARER_TOKEN = process.env.BACKEND_API_BEARER_TOKEN;

export async function GET(request: NextRequest) {
  try {
    // Validate environment variables
    if (!BACKEND_API_URL || !BACKEND_API_BEARER_TOKEN) {
      return NextResponse.json(
        { status: "error", message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Forward request to backend with bearer token
    const response = await fetch(`${BACKEND_API_URL}/health`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${BACKEND_API_BEARER_TOKEN}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { status: "error", message: "Backend health check failed" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error checking health:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to connect to backend" },
      { status: 500 }
    );
  }
}
