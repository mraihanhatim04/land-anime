import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function MyMenu() {
  return (
    <>
      <div className="bg-zinc-100">
        <div className="flex container p-2 mx-auto justify-between">
          <div className="flex gap-2">
            <Link href={"/"}>
              <Button
                size={"lg"}
                className="bg-zinc-800 hover:bg-black rounded-lg text-white"
              >
                Popular Anime
              </Button>
            </Link>
            <Link href={"/"}>
              <Button
                size={"lg"}
                className="bg-zinc-800 hover:bg-black rounded-lg text-white"
              >
                Popular Anime
              </Button>
            </Link>
          </div>
          <div className="w-[250px]">
            <Input type="email" placeholder="Search Anime..." />
          </div>
        </div>
      </div>
    </>
  );
}
