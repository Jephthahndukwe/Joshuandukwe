import type { Metadata, Viewport } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { brand, masterclass, siteTitle } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Noto_Serif({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-noto-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: { default: siteTitle, template: `%s | ${brand.name}` },
  description: masterclass.subhead,
  openGraph: {
    title: siteTitle,
    description: masterclass.subhead,
    type: "website",
    siteName: brand.name,
  },
  twitter: { card: "summary", title: siteTitle, description: masterclass.subhead },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0b1324" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="min-h-dvh font-serif">{children}</body>
    </html>
  );
}
