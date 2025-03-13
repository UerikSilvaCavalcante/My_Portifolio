
interface cardInterface {

	title: string;
	description: string;
	style?: string;
}

export function Card({ title, description, style }: cardInterface) {
	


	return (
		<div className={`cardAbout  ${style}`}>
			<div
				className={"relative  flex flex-col items-start justify-start border-4 border-teal-400 rounded-lg bg-gray-900 p-4 gap-3 py-6 h-full w-full  "}
			>
				<h1 className=" text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-green-600  to-teal-400 font-bold about">
					{title}
				</h1>
				<p className=" text-base text-wrap lg:text-lg text-justify  text-teal-400 about">
					{description}
				</p>
			</div>
		</div>
	);
}
