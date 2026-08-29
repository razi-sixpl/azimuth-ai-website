import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Azimuth AI |",
    template: "%s | Azimuth AI",
  },
  icons: {
    icon: [
      { url: "/images/azimuth-ai-logo-11-16.png", sizes: "32x32" },
      { url: "/images/azimuth-ai-logo-11-16.png", sizes: "192x192" },
    ],
    apple: [{ url: "/images/azimuth-ai-logo-11-16.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main id="content" style={{ paddingTop: "var(--header-h)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
