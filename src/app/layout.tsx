import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reinhard von Hollander | West Hartford Real Estate Developer",
    template: "%s | Reinhard von Hollander",
  },
  description:
    "Custom homes and expert renovations in West Hartford, Connecticut. Quality craftsmanship and modern design from concept to completion.",
  keywords: [
    "West Hartford real estate",
    "custom homes",
    "renovation",
    "new construction",
    "Connecticut",
    "house flipping",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reinhard von Hollander",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
