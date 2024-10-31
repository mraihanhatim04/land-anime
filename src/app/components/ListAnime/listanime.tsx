import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function ListAnime({ title, image }: any) {
  return (
    <div className="bg-zinc-50 shadow-2xl border rounded-3xl p-4">
      <h2 className="text-md">{title.slice(0, 18)}</h2>
      <Separator />
      <Link href={""}>
        <Image
          priority={false}
          src={image}
          alt={"Anime Title"}
          width={200}
          height={200}
          className="w-full h-[250px] object-cover rounded mt-1 justify-center items-center"
        />
      </Link>
      <Button className="w-full mt-1 rounded-lg hover:bg-zinc-700 hover:text-white">
        Details Here
      </Button>
    </div>
  );
}
