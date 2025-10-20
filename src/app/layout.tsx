import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#7c3aed"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        {children}
      </body>
    </html>
  );
}
