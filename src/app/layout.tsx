import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
