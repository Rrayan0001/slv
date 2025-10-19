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
  title: "SLV Cargo Movers - Reliable Logistics Solutions",
  description: "Professional logistics and cargo moving services. Air freight, road transport, sea freight, and warehousing solutions across India.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  themeColor: "#7c3aed",
  icons: {
    icon: [
      { url: "/slvlogo1.png", sizes: "32x32", type: "image/png" },
      { url: "/slvlogo1.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/slvlogo1.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/slvlogo1.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
