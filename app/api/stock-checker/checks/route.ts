import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const BACKEND_API_URL = process.env.BACKEND_API_URL;
const BACKEND_API_BEARER_TOKEN = process.env.BACKEND_API_BEARER_TOKEN;

// Valid duration options in minutes
const VALID_INTERVALS = [60, 360, 720, 1440]; // 1hr, 6hr, 12hr, 24hr

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Validate environment variables
    if (!BACKEND_API_URL || !BACKEND_API_BEARER_TOKEN) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate required fields
    if (!body.productUrl || !body.deliveryPincode || !body.phoneNumber) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate intervalMinutes
    if (
      !body.intervalMinutes ||
      !VALID_INTERVALS.includes(body.intervalMinutes)
    ) {
      return NextResponse.json(
        { error: "Invalid check interval. Must be 1hr, 6hr, 12hr, or 24hr" },
        { status: 400 },
      );
    }

    // Forward request to backend with bearer token
    const response = await fetch(`${BACKEND_API_URL}/checks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BACKEND_API_BEARER_TOKEN}`,
      },
      body: JSON.stringify({
        ...body,
        email: session.user.email, // Use email from session
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to create subscription" },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating check:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
