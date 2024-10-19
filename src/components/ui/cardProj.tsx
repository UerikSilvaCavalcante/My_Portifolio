import { CardTag } from "./cardTag";

interface CardProjectProps {
	title: string;
	description: string;
	tags: string[];
	repository: string;
	reverse: boolean;
	href?: string;
	src: string;
}

export function CardProject({
	title,
	description,
	tags,
	repository,
	reverse,
	href,
	src,
}: CardProjectProps) {
	return (
		<div
			className={`flex ${reverse ? "flex-col lg:flex-row-reverse border-gradient bg-gradient-to-r from-gray-800 to-gray-900 border-l-2 drags-reverse-x" : "flex-col lg:flex-row border-reverse-gradient bg-gradient-to-l from-gray-800 to-gray-900 border-r-2 drags-x"} border-y-2 w-full items-center justify-end p-2 gap-9 lg:gap-3  z-10 overflow-hidden`}
		>
			<a href={href} className=" w-full h-[400px] image-card overflow-hidden">
				<span
					className={`w-full h-[55%] lg:h-full lg:w-1/2 absolute ${reverse ? "lg:translate-x-full" : ""} inset-0 flex justify-center items-center hover:backdrop-blur-sm overflow-hidden card-icon-wrapper`}
				>
					<i className="bi bi-arrow-up-right text-5xl text-zinc-400 font-extrabold card-icon"></i>
				</span>
				<img
					src={src}
					alt={title}
					className="w-full h-[90%] lg:h-full object-cover rounded-md"
				/>
			</a>
			<div className="flex flex-col lg:max-w-[50%] gap-1">
				<div className="flex flex-col bg-gray-900 rounded-t-md p-2 gap-4">
					<h1
						className={`text-lg lg:text-3xl font-bold text-teal-400 ${reverse ? "text-left" : "text-right"}`}
					>
						{title}
					</h1>
					<p
						className={`text-lg lg:text-xl text-zinc-400  ${reverse ? "text-left" : "text-right"}`}
					>
						{description}
					</p>
				</div>
				<div
					className={`flex flex-wrap items-center ${reverse ? "justify-start" : "justify-end"} gap-1 bg-gray-900 p-2`}
				>
					{tags.map((tag) => (
						<CardTag tag={tag} />
					))}
				</div>
				<div
					className={`flex items-center ${reverse ? "justify-start" : "justify-end"} gap-3 text-zinc-400 bg-gray-900 rounded-b-md p-2`}
				>
					<a
						href={repository}
						className="flex items-center justify-center gap-2 text-lg hover:text-teal-400 transition-colors duration-300 ease-out"
					>
						<i className="bi bi-github"></i>
						Repository
					</a>
					<a
						href={href}
						className="flex items-center justify-center gap-2 text-lg hover:text-teal-400 transition-colors duration-300 ease-out"
					>
						<i className="bi bi-box-arrow-up-right"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
