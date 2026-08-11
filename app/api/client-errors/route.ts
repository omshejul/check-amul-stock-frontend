import { NextRequest, NextResponse } from "next/server";
import { recordError } from "@/lib/server-observability";

const requests = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return new NextResponse(null, { status: 403 });
  if (Number(request.headers.get("content-length") || 0) > 16_384) return new NextResponse(null, { status: 413 });

  const key = request.headers.get("x-vercel-forwarded-for")?.split(",")[0] || "unknown";
  const now = Date.now();
  const bucket = requests.get(key);
  if (bucket && bucket.resetAt > now && bucket.count >= 10) return new NextResponse(null, { status: 429 });
  requests.set(key, bucket && bucket.resetAt > now ? { ...bucket, count: bucket.count + 1 } : { count: 1, resetAt: now + 60_000 });

  try {
    const body = await request.json();
    const error = new Error(typeof body.message === "string" ? body.message : "Browser error");
    error.name = typeof body.name === "string" ? body.name : "ClientError";
    error.stack = typeof body.stack === "string" ? body.stack : undefined;
    await recordError(error, "browser_error", { client_error_type: typeof body.type === "string" ? body.type.slice(0, 60) : "unknown" });
    return new NextResponse(null, { status: 204 });
  } catch {
    return new NextResponse(null, { status: 400 });
  }
}
