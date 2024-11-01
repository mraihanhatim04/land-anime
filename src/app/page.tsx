import { Popcorn } from "lucide-react";
import ListAnime from "./components/ListAnime/listanime";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const animeData = await res.json();

  return (
    <>
      <div className="flex flex-col container mx-auto mt-8">
        <div className="flex justify-between px-6 md:px-8">
          <div className="flex">
            <h1 className="md:text-2xl text-xl font-bold tracking-wider">
              Popular Anime
            </h1>
            <Popcorn size={25} />
          </div>
          <div className="mt-1">
            <Link href={"/"} className="md:text-xl text-sm underline">
              See All Popular Anime
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5 mb-28">
          {animeData.data.map((topAnime: any) => (
            <ListAnime
              key={topAnime.mal_id}
              title={topAnime.title}
              image={topAnime.images.webp.image_url}
            />
          ))}
        </div>
      </div>
    </>
  );
}
