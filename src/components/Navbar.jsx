import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();

	const handleLogout = () => {
		deleteCookie("token");
		router.push("/login");
	};

	return (
		<nav className="bg-gradient-to-br from-[#242118] to-[#242118] px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<h1 className="text-2xl font-bold leading-9 tracking-tight text-center">D&apos;Food</h1>
				<button onClick={handleLogout} className="px-4 py-2 font-semibold text-gray-900 bg-yellow-400 rounded-lg">
					Logout
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
