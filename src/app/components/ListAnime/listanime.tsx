import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function ListAnime({ api }: any) {
  return (
    <div className="flex flex-col container mx-auto">
      <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-5 mb-28">
        {api.data.map((anime: any) => (
          <div
            key={anime.mal_id}
            className="bg-zinc-50 shadow-2xl border rounded-3xl p-4"
          >
            <h2 className="text-md">{anime.title.slice(0, 18)}</h2>
            <Separator />
            <Link href={`/anime/${anime.mal_id}`}>
              <Image
                priority={false}
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={200}
                height={200}
                className="w-full h-[250px] object-cover rounded mt-1"
              />
            </Link>
            <Button className="w-full mt-1 rounded-lg hover:bg-zinc-700 hover:text-white">
              Details Here
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
