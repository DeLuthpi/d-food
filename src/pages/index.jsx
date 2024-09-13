import { getCookie } from "cookies-next";

export const getServerSideProps = (context) => {
	const token = getCookie("token", context);
	if (!token) {
		return {
			redirect: {
				destination: "/login",
			},
		};
	}

	return {
		props: {},
	};
};

const HomePage = () => {
	return (
		<div className="flex flex-col items-center justify-between min-h-screen p-24">
			<h1 className="text-2xl">Ini Halaman Home</h1>
		</div>
	);
};

export default HomePage;
