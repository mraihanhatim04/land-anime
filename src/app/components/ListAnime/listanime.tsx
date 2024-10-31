import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ListAnime() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-6 mb-28">
      <div className="bg-zinc-950 text-white border rounded-lg shadow-md p-4">
        <h2 className="text-md font-normal">Anime Title</h2>
        <Separator />
        <Image
          src={"https://via.placeholder.com/150?"}
          alt={"Anime Title"}
          width={180}
          height={150}
          className="rounded mt-2 justify-center items-center"
        />
      </div>
    </div>
  );
}
