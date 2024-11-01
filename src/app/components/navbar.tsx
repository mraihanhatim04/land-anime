"use client";

import { GemIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Input } from "../../components/ui/input";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex p-3 bg-background border border-black shadow-md">
      <div className="flex container lg:mx-10 justify-between">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold mr-2">LandAnime</h1>
          </Link>
          <GemIcon size={34} />
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Anime..."
              className="pr-10 px-2"
            />
            <Button className="absolute bg-zinc-700 text-white inset-y-0 right-0 flex items-center">
              <SearchIcon size={25} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
