import React, { useEffect, useState } from "react";
import { Link } from "./ui/links";
// Certifique-se de que o caminho está correto

export const MobileNavbar: React.FC = () => {
	const [activeLink, setActiveLink] = useState<number | null>(null);

	useEffect(() => {
		const list = document.querySelectorAll(".list");

		function handleScroll() {
			const sections = document.querySelectorAll("section");
			let currentSectionIndex: number | null = null;

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
		}

		function activeLinkHandler(this: HTMLElement) {
			list.forEach((item) => item.classList.remove("active"));
			this.classList.add("active");
		}

		list.forEach((item) => item.addEventListener("click", activeLinkHandler));
		window.addEventListener("scroll", handleScroll);

		return () => {
			list.forEach((item) =>
				item.removeEventListener("click", activeLinkHandler),
			);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const list = document.querySelectorAll(".list");
		if (activeLink !== null) {
			list.forEach((item, index) => {
				if (index === activeLink) {
					item.classList.add("active");
				} else {
					item.classList.remove("active");
				}
			});
		}
	}, [activeLink]);

	return (
		<div className="navigation">
			<ul>
				<li className="list active">
					<a href="#home">
						<span className="icon">
							<i className="bi bi-house"></i>
						</span>
						<span className="text">Home</span>
						<span className="circle"></span>
					</a>
				</li>
				<li className="list">
					<a href="#about">
						<span className="icon">
							<i className="bi bi-person"></i>
						</span>
						<span className="text">Profile</span>
						<span className="circle"></span>
					</a>
				</li>
				<li className="list">
					<a href="#tecnologies">
						<span className="icon">
							<i className="bi bi-gear-fill"></i>
						</span>
						<span className="text">Tecnologies</span>
						<span className="circle"></span>
					</a>
				</li>
				<li className="list">
					<a href="#projects">
						<span className="icon">
							<i className="bi bi-code-slash"></i>
						</span>
						<span className="text">Projects</span>
						<span className="circle"></span>
					</a>
				</li>
				<li className="list">
					<a href="#contact">
						<span className="icon">
							<i className="bi bi-telephone"></i>
						</span>
						<span className="text">Contacts</span>
						<span className="circle"></span>
					</a>
				</li>
				<div className="indicator"></div>
			</ul>
		</div>
	);
};
