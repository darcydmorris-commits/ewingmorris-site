import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://ewingmorris.com"),
  title: {
    default: "Ewing Morris | Independent Investment Firm",
    template: "%s | Ewing Morris",
  },
  description:
    "Independent investment firm serving affluent families, entrepreneurs, professionals, and select institutions with thoughtful wealth management and differentiated investment capabilities.",
  openGraph: {
    title: "Ewing Morris | Independent Investment Firm",
    description:
      "Independent investment firm serving affluent families, entrepreneurs, professionals, and select institutions.",
    url: "https://ewingmorris.com",
    siteName: "Ewing Morris",
    locale: "en_CA",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-stone-100 text-slate-900 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(180,145,100,0.14),transparent_22%),radial-gradient(circle_at_84%_14%,rgba(58,93,129,0.14),transparent_18%),linear-gradient(180deg,#f7f1e8_0%,#eee2d1_46%,#e7d8c2_100%)]">
          <div className="mx-auto w-[min(1180px,calc(100vw-48px))] py-6 sm:py-8">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
