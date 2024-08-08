import type { Metadata } from "next";
import { Unbounded, Albert_Sans } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={cn(unbounded.variable, albert.className, signature.variable)}>
        <Navbar />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
