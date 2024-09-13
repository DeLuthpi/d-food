import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {
	const token = getCookie("token");
	const router = useRouter();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const getData = () => {
		setLoading(true);
		axios
			.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
				headers: {
					apiKey: "w05KkI9AWhKxzvPFtXotUva-",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				setData(res.data.data);
				setLoading(false);
			})
			.catch((err) => {
				// console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<main className="main-section">
			<h1 className="mt-10 text-2xl text-center">Menu List</h1>
			<hr className="line-hr" />
			<div className="grid grid-cols-1 mx-6 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
				{data.map((item) => (
					<div className="relative group" key={item?.id}>
						<div className="w-full overflow-hidden bg-gray-200 rounded-t-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
							<img src={item?.imageUrl} alt={item?.name} className="object-cover object-center w-full h-[250px] text-gray-900 lg:h-full lg:w-full" />
						</div>
						<div className="flex justify-center p-4 bg-white rounded-b-md">
							<h3 className="text-base font-semibold text-gray-900">
								<Link href={`/${item?.id}`}>
									<span aria-hidden="true" className="absolute inset-0"></span>
									{item?.name}
								</Link>
							</h3>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default HomePage;
