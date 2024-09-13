import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

const Authorization = ({ children }) => {
	const router = useRouter();

	useEffect(() => {
		const token = getCookie("token");
		if (!token) router.push("/login");
	}, []);

	return children;
};

export default Authorization;
