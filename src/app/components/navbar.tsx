"use client";

import { GemIcon, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../../components/ui/input";

export default function Navbar() {
  return (
    <nav className="flex p-3 bg-background border border-black shadow-md">
      <div className="flex container lg:mx-10 justify-between">
        <div className="flex ">
          <Link href="/">
            <h1 className="text-3xl font-bold">LandAnime</h1>
          </Link>
          <GemIcon size={34} />
        </div>
      </div>
    </nav>
  );
}
