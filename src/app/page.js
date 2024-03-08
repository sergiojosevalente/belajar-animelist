import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
	);
	const topAnime = await response.json();
	return (
		<>
    {/* anime popular */}
			<section>
				<Header title="Popular" linkTitle="See ALL" linkHref="/popular" />
				<AnimeList api={topAnime} />
			</section>
		{/* new anime */}
    <section>
				<Header title="New" linkTitle="See ALL" linkHref="/new" />
				<AnimeList api={topAnime} />
			</section>
    </>
	);
};

export default Home

