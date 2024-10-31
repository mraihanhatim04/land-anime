import { Popcorn } from "lucide-react";
import ListAnime from "./components/ListAnime/listanime";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`);
  const animeData = await res.json();

  return (
    <>
      <div className="flex flex-col container mx-auto mt-12">
        <div className="flex">
          <h1 className="text-2xl ml-5 font-bold tracking-wider">
            Popular Anime
          </h1>
          <Popcorn size={30} />
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
