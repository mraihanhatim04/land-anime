import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Hero from "@/components/hero";
import { DynaPuff } from "@next/font/google";

export const metadata: Metadata = {
  title: "Land Anime",
  description: "Website that displays anime lists",
};

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dynaPuff.className}`}>
        <Navbar />
        <Hero />
        {children}
      </body>
    </html>
  );
}
