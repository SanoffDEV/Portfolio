import { ReactElement } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProviderClient } from "../../locales/client";
import "./globals.css";
import "./providers";
import { Providers } from "./providers";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathis's Portfolio",
  description: "Website created and designed by Mathis for my portfolio",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Cette partie est pour attendre la locale, comme tu l'as dans ton SubLayout
  const { locale } = params;

  return (
    <html lang={locale} suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} font-sans h-full ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Utilisation du I18nProviderClient pour la locale */}
          <I18nProviderClient locale={locale}>
            <Providers locale={locale}>{children}</Providers>
          </I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
