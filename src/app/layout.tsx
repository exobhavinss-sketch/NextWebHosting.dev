import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollProgress />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: siteConfig.name,
                description: siteConfig.description,
                url: siteConfig.url,
                email: siteConfig.email,
                telephone: siteConfig.phone,
                sameAs: [
                  siteConfig.socials.instagram,
                  siteConfig.socials.twitter,
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
