import type { Metadata } from "next";
import {
  Encode_Sans_Semi_Condensed,
  Geist,
  Geist_Mono,
  Noto_Serif,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serifDisplay = Noto_Serif({
  variable: "--font-serif-display",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const sansCondensed = Encode_Sans_Semi_Condensed({
  variable: "--font-sans-condensed",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arivio",
  description: "Mobile-first companion app start page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${serifDisplay.variable} ${sansCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
