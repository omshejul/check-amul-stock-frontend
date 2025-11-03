import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  IBM_Plex_Sans,
} from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/session-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amul Stock Checker - Monitor Product Availability",
    template: "%s | Amul Stock Checker",
  },
  description:
    "Monitor Amul product stock availability and get instant WhatsApp notifications when products are back in stock. Built with Next.js, NextAuth, and shadcn/ui.",
  keywords: [
    "Amul",
    "stock checker",
    "stock monitor",
    "product availability",
    "WhatsApp notifications",
    "stock alerts",
    "Amul products",
    "inventory tracker",
    "Next.js",
    "open source",
  ],
  authors: [{ name: "Om Shejul", url: "https://github.com/omshejul" }],
  creator: "Om Shejul",
  publisher: "Om Shejul",
  applicationName: "Amul Stock Checker",
  metadataBase: new URL("https://amul.omshejul.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      {
        url: "/apple-touch-icon-precomposed.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Amul Stock Checker - Monitor Product Availability",
    description:
      "Get instant WhatsApp notifications when Amul products are back in stock. Free and open source.",
    type: "website",
    url: "https://amul.omshejul.com",
    siteName: "Amul Stock Checker",
    images: [
      {
        url: "/screenshots/app-preview.png",
        width: 2000,
        height: 1468,
        alt: "Amul Stock Checker App Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amul Stock Checker - Monitor Product Availability",
    description:
      "Get instant WhatsApp notifications when Amul products are back in stock. Free and open source.",
    images: ["/screenshots/app-preview.png"],
    creator: "@omshejul",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${plusJakartaSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
