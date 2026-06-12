import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://femoire-novia.vercel.app"),
  title: "Femoire Novia - Suplemen Kesehatan Wanita Premium",
  description: "Femoire Novia adalah suplemen kesehatan wanita premium dengan bahan alami untuk membantu menjaga kesegaran, kenyamanan, dan kepercayaan diri.",
  keywords: ["Femoire Novia", "suplemen wanita", "kesehatan wanita", "produk herbal wanita", "Novia"],
  authors: [{ name: "Femoire Novia" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Femoire Novia",
    description: "Suplemen kesehatan wanita premium dengan bahan alami berkualitas.",
    url: "/",
    siteName: "Femoire Novia",
    images: ["/novia-display.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Femoire Novia",
    description: "Suplemen kesehatan wanita premium dengan bahan alami berkualitas.",
    images: ["/novia-display.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script src="https://plus.adcuan.com/code.js?nomor=6"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
