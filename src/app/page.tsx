import { Inter } from "next/font/google";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<NavBar />

			<MainBody />
		</main>
	);
}
