import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeModeScript />
        {/* Favicon */}
        <link rel="icon" href="/logo/jo_logo.svg" sizes="any" />
        <link rel="icon" href="/logo/jo_logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/jo_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={sora.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
