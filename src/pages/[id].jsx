import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Navbar from "@/components/Navbar";

const DetailPage = () => {
	const token = getCookie("token");
	const router = useRouter();
	const [item, setItem] = useState();

	const handleBack = () => {
		router.push("/");
	};

	const getData = () => {
		axios
			.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${router.query.id}`, {
				headers: {
					apiKey: "w05KkI9AWhKxzvPFtXotUva-",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				setItem(res.data.data);
			});
	};

	useEffect(() => {
		const token = getCookie("token");
		if (token) if (router.query.id) getData();
	}, [router.query.id]);

	return (
		<main className="main-section">
			<Navbar />
			<div className="pb-20">
				<h1 className="mt-20 text-2xl text-center">Detail Menu</h1>
				<hr className="line-hr" />
				<div className="h-[100vh] pt-6">
					<div className="flex justify-end mr-10 xl:mr-28 2xl:mr-48">
						<button onClick={handleBack} className="px-4 py-2 font-semibold text-gray-900 bg-yellow-400 rounded-lg">
							Kembali
						</button>
					</div>
					<div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
						<div className="mb-4 sm:mb-0 aspect-h-4 aspect-w-3 lg:block">
							<img alt={item?.name} src={item?.imageUrl} className="object-cover object-center w-full h-full rounded-lg" />
						</div>

						<div className="p-4 border rounded-lg bg-gradient-to-br from-[#242118] to-[#242118]">
							<div className="lg:col-span-2 lg:pr-8">
								<h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{item?.name}</h1>
							</div>

							<div className="py-10 lg:col-span-4 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
								<div>
									<h3 className="sr-only">Description</h3>
									<div className="space-y-6">
										<p className="text-base">Description : {item?.description}</p>
									</div>
								</div>
								<div className="mt-6">
									<h3 className="text-sm font-medium">Ingredients :</h3>
									<div className="mt-4">
										<ul role="list" className="pl-4 space-y-2 text-sm list-disc">
											{item?.ingredients.map((bahan) => (
												<li key={bahan}>
													<span>{bahan}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="mt-4 space-y-2">
										<p className="text-sm">Created at : {item?.createdAt}</p>
										<p className="text-sm">Updated at : {item?.updatedAt}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DetailPage;
