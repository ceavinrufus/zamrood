import type { Metadata } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Head from "next/head";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const signature = localFont({
  src: "../public/fonts/Thesignature.otf",
  variable: "--font-the-signature",
});

export const metadata: Metadata = {
  title: "Zamrood by Pandooin | Premium Travel Experiences in Indonesia",
  description:
    "Experience the finest that Indonesia has to offer with Zamrood's curated selection of premium trips, ensuring comfort every step of the way.",
  icons: {
    icon: "https://www.zamrood.com/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          unbounded.variable,
          albert.className,
          signature.variable,
          "bg-cream"
        )}
      >
        <Navbar />
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
