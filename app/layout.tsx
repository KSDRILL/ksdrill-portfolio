import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/app/providers";
import { fontMono, fontSans } from "@/app/fonts";

export const metadata = {
  title: "Maluleke Kurhula Success – Engineering Portfolio",
  description:
    "Software Engineer and AI Systems Architect building scalable platforms across SaaS, fintech, AI, and enterprise."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

