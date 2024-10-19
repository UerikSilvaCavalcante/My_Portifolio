import { Link } from "./ui/links";
import { useState, useEffect } from "react";

export function Navbar() {
	const [activeLink, setActiveLink] = useState<number | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let currentSectionIndex = null;

			sections.forEach((section, index) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const scrollPosition = window.scrollY + window.innerHeight / 2;

				if (
					scrollPosition >= sectionTop &&
					scrollPosition < sectionTop + sectionHeight
				) {
					currentSectionIndex = index;
				}
			});

			setActiveLink(currentSectionIndex);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	

	// function handleActiveLink(key: number) {
	// 	setActiveLink(key);
	// }
	return (
		<nav className="w-screen bg-transparent z-20  flex justify-center items-center p-6 fixed top-0 left-0 backdrop-blur-md">
			<ul className="flex flex-row w-full max-w-5xl items-center justify-between list-none">
				<Link
					href="#home"
					name="Home"
					icon="bi bi-house"
					key={0}
					isActive={activeLink === 0}
					onClick={() => setActiveLink(0)}
				/>
				<Link
					href="#about"
					name="About"
					icon="bi bi-person"
					key={1}
					isActive={activeLink === 1}
					onClick={() => setActiveLink(1)}
				/>
				<Link
					href="#tecnologies"
					name="Tecnologies"
					icon="bi bi-gear-fill"
					key={2}
					isActive={activeLink === 2}
					onClick={() => setActiveLink(2)}
				/>
				<Link
					href="#projects"
					name="Projects"
					icon="bi bi-code-slash"
					key={3}
					isActive={activeLink === 3}
					onClick={() => setActiveLink(3)}
				/>
				<Link
					href="#contact"
					name="Contact"
					icon="bi bi-telephone"
					key={4}
					isActive={activeLink === 4}
					onClick={() => setActiveLink(4)}
				/>
			</ul>
		</nav>
	);
}
