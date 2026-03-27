import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Hamba Rides – Safe, Affordable Rides Across Gauteng",
    template: "%s | Hamba Rides",
  },
  description: "Hamba Rides connects riders with trusted, verified drivers across Gauteng. Fast, safe, and transparent pricing – download the app today.",
  keywords: ["ride hailing", "Gauteng", "South Africa", "taxi app", "safe rides", "women only rides", "Hamba"],
  openGraph: {
    title: "Hamba Rides – Safe, Affordable Rides Across Gauteng",
    description: "Fast, safe, and transparent rides across Gauteng. Download Hamba Rides today.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
