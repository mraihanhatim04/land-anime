import { Popcorn } from "lucide-react";
import Link from "next/link";

export default function HeaderAnime({ title, linkHref, linkTitle }: any) {
  return (
    <>
      <div className="flex justify-between px-6 md:px-14 ">
        <div className="flex">
          <h1 className="md:text-2xl text-xl font-bold tracking-wider">
            {title}
          </h1>
          <Popcorn size={25} />
        </div>
        <div className="mt-1">
          <Link href={linkHref} className="md:text-xl text-sm underline">
            {linkTitle}
          </Link>
        </div>
      </div>
    </>
  );
}
