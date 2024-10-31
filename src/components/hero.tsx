import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import GridPattern from "./ui/grid-pattern";
import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col size-full h-[300px] text-center items-center justify-center overflow-hidden border bg-background p-20 md:shadow-xl gap-2">
        <VelocityScroll
          text="Land Anime"
          default_velocity={2}
          className="font-display text-center text-2xl font-bold "
        />
        <p className="italic">
          "Find Your Next Adventure, Dive into the latest anime releases and
          timeless classics"
        </p>
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,transparent)]"
          )}
        />
        <div className="flex gap-4 mt-4">
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