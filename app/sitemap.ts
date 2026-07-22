import type { MetadataRoute } from "next";

const baseUrl = "https://amul.omshejul.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/amul-protein-stock`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/amul-restock-alerts`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
