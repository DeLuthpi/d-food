import "@/styles/globals.css";
import Authorization from "@/components/Authorization";

export default function App({ Component, pageProps }) {
	return (
		<Authorization>
			<Component {...pageProps} />
		</Authorization>
	);
}
