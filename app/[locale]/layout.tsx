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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // Corrigez ici si besoin
}) {
  return (
    <html
      lang={params.locale || "en"}
      suppressHydrationWarning
      className="h-full"
    >
      <body
        className={`${geistSans.variable} font-sans h-full ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers locale={params.locale}>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
