import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-alt",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "S L V Cargo Movers and Packers | Reliable Logistics Partner",
  description: "Providing logistics, freight, and end-to-end delivery services since 2005. Trusted by major clients across India.",
  keywords: "cargo movers Bangalore, packers movers India, logistics company, SLV Cargo, freight delivery Bangalore",
  icons: {
    icon: [
      { url: "/favicon2.jpeg", sizes: "any" },
      { url: "/favicon2.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/favicon2.jpeg", sizes: "16x16", type: "image/jpeg" }
    ],
    apple: [
      { url: "/favicon2.jpeg", sizes: "180x180", type: "image/jpeg" }
    ],
    shortcut: "/favicon2.jpeg"
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
        className={`${poppins.variable} ${montserrat.variable} ${openSans.variable} antialiased overflow-x-hidden w-full`}
      >
        {children}
      </body>
    </html>
  );
}
