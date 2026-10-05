import type { MetadataRoute } from "next";

const baseUrl = "https://amulstock.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update these dates only when the corresponding page content changes.
  // Dates are verified from Git history, not generated on each build.
  return [
    { url: baseUrl, lastModified: "2026-08-11", changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/amul-protein-stock`, lastModified: "2026-08-11", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/amul-restock-alerts`, lastModified: "2026-08-11", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified: "2026-08-11", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: "2026-08-11", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: "2026-07-23", changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: "2026-08-11", changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: "2026-08-11", changeFrequency: "yearly", priority: 0.3 },
  ];
}
