import { Engine } from "./ui/engines";

export function Tecnologies() {
	const LenguagesIcons = [
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
			alt: "csharp",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
			alt: "python",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			alt: "javascript",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
			alt: "typescript",
		},
	];

	const FrameworksIcons = [
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
			alt: "dotnet",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
			alt: "flask",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
			alt: "django",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
			alt: "nodejs",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
			alt: "pandas",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
			alt: "tailwindcss",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			alt: "react",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
			alt: "selenium",
		},
	];

	const DataBaseIcons = [
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
			alt: "postgresql",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
			alt: "sqlite",
		},
	];

	const OtterIcons = [
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
			alt: "git",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
			alt: "github",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
			alt: "docker",
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
			alt: "postman",
		},
	];
	return (
		<section
			className="w-full   bg-gray-900 flex flex-col items-start justify-start py- lg:py-20  px-3"
			id="tecnologies"
		>
			<h1 className="text-4xl p-4 text-transparent  bg-clip-text bg-gradient-to-r from-green-600  to-teal-400 font-bold ">
				My Tecnologies
			</h1>
			<div className="w-full px-1 flex flex-col lg:flex-row items-center justify-center gap-8">
				<div className="flex flex-col border-t-2 justify-evenly border-b-2 border-l-2  p-4 rounded-md border-gradient">
					<Engine title="DataBases" icons={DataBaseIcons} />
					<Engine title="Linguagens" icons={LenguagesIcons} />
					<Engine title="Frameworks/Modules" icons={FrameworksIcons} />
				</div>
				<div className="h-full items-center justify-center border-t-2 border-b-2 border-r-2 p-[30px] border-reverse-gradient">
					<Engine title="Others" icons={OtterIcons} flexCol={true} />
				</div>
			</div>
		</section>
	);
}
