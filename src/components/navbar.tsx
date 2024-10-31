"use client";

import { GemIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex p-3 bg-background border border-black shadow-md">
      <div className="flex container mx-auto">
        <Link href="/">
          <h1 className="text-3xl font-bold tracking-wider">LandAnime</h1>
        </Link>
        <GemIcon size={32} />
      </div>
    </nav>
  );
}
