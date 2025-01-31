import { Geist, Geist_Mono } from "next/font/google";
import { ReactElement } from "react";
import { I18nProviderClient } from "../../locales/client";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers";
import { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// Charge uniquement cette police quand elle est utilisée

export const metadata: Metadata = {
  title: "Mathis's Portfolio",
  description: "Website created and designed by Mathis for my portfolio",
};

export default async function SubLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) {
  const { locale } = await params;

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
          <I18nProviderClient locale={locale}>
            <Providers locale={locale}>{children}</Providers>
          </I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
