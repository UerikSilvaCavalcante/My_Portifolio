interface EnginProps {
	title: string;
	icons: {
		icon: string;
		alt: string;
	}[];
	flexCol?: boolean;
}

export function Engine({ title, icons, flexCol }: EnginProps) {
	return (
		<div className="h-full flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 mt-3 ">
			<h1 className=" text-xl text-wrap text-transparent  bg-clip-text bg-gradient-to-r from-green-600  to-teal-400 font-bold">
				{title}
			</h1>
			<div
				className={
					flexCol
						? "flex flex-col  items-center gap-7 p-2 bg-gradient-to-r to-green-600 from-teal-400 rounded-xl surges"
						: "flex items-center flex-col lg:flex-row gap-7 p-2 bg-gradient-to-r to-green-600 from-teal-400 rounded-xl surges"
				}
			>
				{icons.map(({ icon, alt }) => {
					return (
						<img
							src={icon}
							alt={alt}
							className="w-16 h-16 drop-shadow-2xl drags grayscale hover:grayscale-0 transition-all duration-300 hover:-translate-y-2"
						/>
					);
				})}
			</div>
		</div>
	);
}
