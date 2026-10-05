import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shop.amul.com",
        port: "",
        pathname: "/s/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Keep existing API sessions/callbacks and robots available on the old host.
        source: "/:path((?!api(?:/|$)|_next(?:/|$)|ingest(?:/|$)|robots\\.txt$).*)",
        has: [{ type: "host", value: "amul.omshejul.com" }],
        destination: "https://amulstock.com/:path",
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
