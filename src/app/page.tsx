"use client";

import { Popcorn } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex container mx-auto mt-6">
        <div className="flex">
          <h1 className="text-2xl ml-10 font-bold tracking-wider">
            Popular Anime
          </h1>
          <Popcorn size={28} />
        </div>
      </div>
    </>
  );
}
