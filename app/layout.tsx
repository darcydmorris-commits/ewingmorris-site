import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { dmSans, garamond } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ewingmorris.com"),
  title: {
    default: "Ewing Morris",
    template: "%s | Ewing Morris",
  },
  description:
    "Independent, employee-owned investment firm based in Toronto, serving private wealth clients and select institutions.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ewing Morris",
    description:
      "Independent, employee-owned investment firm based in Toronto, serving private wealth clients and select institutions.",
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
    <html lang="en" className={`${garamond.variable} ${dmSans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
