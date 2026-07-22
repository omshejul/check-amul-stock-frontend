import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amul Stock Checker",
    short_name: "Amul Stock",
    description:
      "Monitor Amul product availability by pincode and receive WhatsApp restock alerts.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#a92961",
    icons: [
      { src: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
