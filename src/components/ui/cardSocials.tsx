import { useState } from "react";

interface CardSocialsProps {
	title: string;
	icon: string;
	href: string;
}

export function CardSocials({ title, icon, href }: CardSocialsProps) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - left;
		const y = e.clientY - top;
		setMousePosition({ x, y });

		e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
		e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
	};

	return (
		<div
			className="card cardSocialappear flex flex-col items-center justify-center p-4 gap-4 glass-effect"
			onMouseMove={handleMouseMove}
		>
			<div className="card-content p-8">
				<i className={`bi ${icon} text-9xl text-zinc-400`}></i>
				<h1 className="text-xl text-zinc-400 font-bold">{title}</h1>
				<a
					href={href}
					className="flex text-zinc-500 bg-gray-700 gap-2 px-5 w-12 py-1"
				>
					<i className="bi bi-link-45deg"></i>
					Follow me
				</a>
			</div>
		</div>
	);
}
