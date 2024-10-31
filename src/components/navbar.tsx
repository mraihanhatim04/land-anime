"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex p-2 bg-background border border-black shadow-md">
      <div className="text-2xl font-bold text-black container mx-auto">
        <Link href="/">LandAnime</Link>
      </div>
    </nav>
  );
}
