import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();

		console.log(e);

		const payload = {
			email: email,
			password: password,
		};

		axios
			.post("https://api-bootcamp.do.dibimbing.id/api/v1/login", payload, {
				headers: {
					"Content-Type": "application/json",
					apiKey: "w05KkI9AWhKxzvPFtXotUva-",
				},
			})
			.then((res) => {
				setCookie("token", res.data.token);
				router.push("/");
			})
			.catch((err) => {
				console.log(err);
				alert(err.response.data.message);
			});
	};

	return (
		<main className="main-section">
			<div className="flex flex-col justify-center min-h-full px-6 py-12 h-svh lg:px-8">
				<div className="p-5 mx-auto border border-gray-300 border-solid rounded-lg w-full md:w-96 bg-gradient-to-br from-[#242118] to-[#242118]">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<h1 className="text-2xl font-bold leading-9 tracking-tight text-center">D&apos;Food</h1>
						<hr className="line-hr" />
						<h2 className="mt-4 text-lg font-normal leading-9 tracking-tight text-center">Sign in to your account</h2>
					</div>

					<div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6" onSubmit={handleLogin}>
							<div>
								<label htmlFor="email" className="block text-sm font-medium leading-6">
									Email
								</label>
								<div className="mt-2">
									<input id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Input your email" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" autoComplete="off" />
								</div>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium leading-6">
									Password
								</label>
								<div className="mt-2">
									<input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Input your password" className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" />
								</div>
							</div>

							<div>
								<button type="submit" className="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
