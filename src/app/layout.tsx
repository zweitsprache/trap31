import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {
  Encode_Sans_Semi_Condensed,
  Geist_Mono,
  PT_Serif,
} from "next/font/google";
import { getLocale } from "next-intl/server";
import { isRTL } from "@/i18n/config";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serifDisplay = PT_Serif({
  variable: "--font-serif-display",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const sansCondensed = Encode_Sans_Semi_Condensed({
  variable: "--font-sans-condensed",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arivio",
  description: "Mobile-first companion app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const rtl = isRTL[locale as keyof typeof isRTL] || false;

  return (
    <html
      lang={locale}
      dir={rtl ? "rtl" : "ltr"}
      className={`${geistMono.variable} ${serifDisplay.variable} ${sansCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
