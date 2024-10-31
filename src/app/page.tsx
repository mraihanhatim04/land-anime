"use client";

import { Popcorn } from "lucide-react";
import ListAnime from "./components/ListAnime/listanime";

export default function Home() {
  return (
    <>
      <div className="flex flex-col container mx-auto mt-12">
        <div className="flex">
          <h1 className="text-2xl ml-5 font-bold tracking-wider">
            Popular Anime
          </h1>
          <Popcorn size={28} />
        </div>
        <div>
          <ListAnime />
        </div>
      </div>
    </>
  );
}
