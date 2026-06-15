import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechVitals - Frontier Science, Tech & Health News",
    template: "%s | TechVitals",
  },
  description: "Stay informed with the latest breakthroughs in medicine, biotechnology, artificial intelligence, and edge hardware.",
  keywords: ["tech", "health", "biotech", "ai", "medicine", "gadgets", "science", "innovation"],
  authors: [{ name: "TechVitals Team" }],
  creator: "TechVitals",
  metadataBase: new URL("https://www.techvitals.tech"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.techvitals.tech",
    title: "TechVitals - Frontier Science, Tech & Health News",
    description: "Stay informed with the latest breakthroughs in medicine, biotechnology, artificial intelligence, and edge hardware.",
    siteName: "TechVitals",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVitals - Frontier Science, Tech & Health News",
    description: "Stay informed with the latest breakthroughs in medicine, biotechnology, artificial intelligence, and edge hardware.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
