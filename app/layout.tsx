import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ── Fonts ────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Portfolio — Architectural Designer & BIM Specialist",
    template: "%s | Portfolio",
  },
  description:
    "Portfolio of Abutalib Eldaw Elnour, an architectural designer and BIM specialist based in Saudi Arabia.",
  keywords: [
    "architecture",
    "BIM",
    "Revit",
    "architectural design",
    "building information modelling",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Abutalib Eldaw Elnour",
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-100 text-brand-950 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
