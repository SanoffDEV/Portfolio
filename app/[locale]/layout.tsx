import { Geist } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Mathis's Portfolio",
  description: "Website created and designed by Mathis for my portfolio",
};

// Modification ici: params n'est plus une promesse
export default async function RootLayout({
  params,
  children,
}: {
  params: { locale: string }; // Mettre à jour le type ici
  children: ReactElement;
}) {
  const { locale } = params; // Pas besoin de await ici

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
