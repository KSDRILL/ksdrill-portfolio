import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://ksdrill-portfolio.vercel.app";
const name = "Maluleke Kurhula Success";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${name} — Engineering Portfolio`, template: "%s" },
  description:
    "Software Engineer and AI Integrator building production-grade platforms across fintech, healthcare, enterprise, and AI.",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: name,
    title: `${name} — Engineering Portfolio`,
    description: "Production-grade platforms built with architecture-first precision.",
    url: siteUrl,
    images: [{ url: "/images/og-image_1.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — Engineering Portfolio`,
    description: "Production-grade platforms built with architecture-first precision."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-obsm-warm text-obsm-text-primary antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}