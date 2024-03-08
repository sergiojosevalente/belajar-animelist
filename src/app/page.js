import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
	);
	const topAnime = await response.json();
	return (
		<div className="p-4 flex justify-between items-center">
			<AnimeList api={topAnime} />
		</div>
	);
};

export default Home;

// const Home = () => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
//   return (
//     <div>
//       <h1>POPULAR</h1>
//       <AnimeList/>
//     </div>
//   )
// }
// export default  Home
