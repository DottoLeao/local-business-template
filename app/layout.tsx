import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { business } from "@/data/business.config";
import { themeToCssVars } from "@/lib/theme";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const fontHeading = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-family",
  display: "swap",
});

const fontBody = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body-family",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: business.seo.title,
  description: business.seo.description,
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: business.seo.title,
    description: business.seo.description,
    images: ["/api/og"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssVars = themeToCssVars(business.theme);

  return (
    <html
      lang="en-AU"
      className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body
        className="relative min-h-full flex flex-col font-sans"
        style={cssVars as React.CSSProperties}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
