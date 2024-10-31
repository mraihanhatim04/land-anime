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
        <div className="flex space-x-1 items-center">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Anime..."
              className="pr-8 border-black w-[150px] lg:w-[200px]"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
