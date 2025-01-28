import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Providers } from "./providers";

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

// Ajoutez `async` à RootLayout si Next.js attend une fonction asynchrone
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>; // Permet la gestion des paramètres asynchrones
}) {
  // Si `params` peut être une Promise, résolvez-la ici
  const resolvedParams = params instanceof Promise ? await params : params;

  const locale = resolvedParams?.locale || "en"; // Par défaut "en"

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
          <Providers locale={locale}>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
