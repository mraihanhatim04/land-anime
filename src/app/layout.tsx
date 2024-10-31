import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Land Anime",
  description: "Website that displays anime lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero />
        {children}
      </body>
    </html>
  );
}
