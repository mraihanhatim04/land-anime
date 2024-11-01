import HeaderAnime from "./components/ListAnime/header";
import ListAnime from "./components/ListAnime/listanime";

export default async function Home() {
  // Fetching Popular Anime
  const resPopular = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const popularAnime = await resPopular.json();

  return (
    <>
      {/* Popular Anime */}
      <section>
        <HeaderAnime
          title="Popular Anime"
          linkHref="/popular"
          linkTitle="See all Popular Anime"
        />
        <ListAnime api={popularAnime} />
      </section>
    </>
  );
}
