import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/auth/"],
    },
    sitemap: "https://amul.omshejul.com/sitemap.xml",
    host: "https://amul.omshejul.com",
  };
}
