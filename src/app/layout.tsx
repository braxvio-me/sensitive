import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Braxvio — We build technology ventures designed to endure",
    template: "%s | Braxvio",
  },
  description:
    "Braxvio is a technology parent company focused on building and scaling enduring ventures across enterprise infrastructure, digital finance, health, and clean energy. Founded in Africa, engineered for the world.",
  keywords: [
    "Braxvio",
    "Technology Parent Company",
    "Venture Studio",
    "African Technology Infrastructure",
    "Enterprise Software",
    "Consumer Platforms",
    "Digital Infrastructure",
    "Pharmora",
    "DevPay Africa",
    "Pellmia",
    "EcoLift",
    "Kampus",
  ],
  authors: [{ name: "Braxvio Engineering & Governance" }],
  creator: "Braxvio",
  publisher: "Braxvio",
  metadataBase: new URL("https://braxvio.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Braxvio — We build technology ventures designed to endure",
    description:
      "Braxvio is a technology parent company focused on building and scaling enduring ventures across enterprise infrastructure, digital finance, health, and clean energy.",
    url: "https://braxvio.com",
    siteName: "Braxvio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Braxvio — Technology Parent Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braxvio — We build technology ventures designed to endure",
    description:
      "Braxvio is a technology parent company focused on building and scaling enduring ventures across enterprise infrastructure, digital finance, health, and clean energy.",
    site: "@braxvio",
    creator: "@braxvio",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { CommandPaletteProvider } from "@/components/navigation/GlobalCommandPalette";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider>
          <CommandPaletteProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CommandPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
