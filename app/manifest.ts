import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amul Stock Checker",
    short_name: "Amul Stock",
    description:
      "Check Amul product stock by pincode and get WhatsApp restock alerts.",
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
