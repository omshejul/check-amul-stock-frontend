import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/api/auth/session$"],
      disallow: ["/api/", "/auth/"],
    },
    sitemap: "https://amulstock.com/sitemap.xml",
    host: "https://amulstock.com",
  };
}
