import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import GridPattern from "./ui/grid-pattern";
import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col size-full h-[250px] text-center items-center justify-center overflow-hidden border bg-background p-20 md:shadow-xl gap-2">
        <VelocityScroll
          text="Find Your Next Adventure, Dive into the latest anime releases and
          timeless classics"
          default_velocity={1}
          className="font-display text-center text-2xl font-bold "
        />
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,transparent)]"
          )}
        />
        <div className="flex gap-2 mt-4">
          <Button className="border border-slate-950 hover:bg-black hover:text-white">
            Popular Anime
          </Button>
          <Button className="border border-slate-950 hover:bg-black hover:text-white">
            Recomendation Anime
          </Button>
        </div>
      </div>
    </>
  );
}
