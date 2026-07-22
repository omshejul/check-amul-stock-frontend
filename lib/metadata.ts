import type { Metadata } from "next";

interface PageMetadataInput {
  title: string;
  description: string;
  path: `/${string}` | "/";
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Amul Stock Checker",
      type: "website",
      images: [
        {
          url: "/screenshots/app-preview.png",
          width: 2000,
          height: 1468,
          alt: "Amul Stock Checker product monitoring interface",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/screenshots/app-preview.png"],
      creator: "@omshejul",
    },
  };
}
