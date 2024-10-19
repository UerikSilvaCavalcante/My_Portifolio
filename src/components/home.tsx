import Perfil from "../assets/perfil.jpeg";
import { Typewriter } from "./ui/typewriter";

export function Home() {
	return (
		<section
			className="w-full h-full  bg-gray-900 flex flex-col lg:flex-row items-center justify-center gap-8 px-10 py-3"
			id="home"
		>
			<div className="bg-green-700 w-72 h-72 p-2 rounded-full hover:shadow-xl hover:shadow-green-700 transition duration-300 ease-in">
				<img
					src={Perfil}
					alt=""
					className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition duration-300 ease-in"
				/>
			</div>
			<div className="lg:max-w-[60%] flex flex-auto flex-col justify-center items-center">
				<div className="flex flex-col  max-w-2xl gap-12">
					<Typewriter text="Hi, I'm Uerik"/>
					<p className="text-xl text-teal-400 text-justify">
						I am a junior back-end developer, passionate about technology and
						programming. I have an ease of learning, and my main languages are{" "}
						<span className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-600  to-teal-400">
							Python
						</span>{" "}
						and{" "}
						<span className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-600  to-teal-400">
							C#
						</span>
						. Currently, I am not employed, but I am always looking for new
						opportunities and challenges.
					</p>
				</div>
				{/* <div className="flex flex-wrap gap-12 border-b-4 border-teal-400 p-2 max-w-[600px]">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
						alt="csharp"
						className="w-20 h-20 drop-shadow-2xl  hover:-translate-y-2 transition-transform duration-500 ease-in-out"
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
						alt="python"
						className="w-20 h-20 drop-shadow-2xl  hover:-translate-y-2 transition-transform duration-500 ease-in-out"
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
						alt="react"
						className="w-20 h-20 drop-shadow-2xl  hover:-translate-y-2 transition-transform duration-500 ease-in-out"
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
						alt="dotnet"
						className="w-20 h-20 drop-shadow-2xl  bg-gray-50 rounded-full hover:-translate-y-2 transition-transform duration-500 ease-in-out "
					/>

					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg"
						alt="postgresql"
						className="w-20 h-20 drop-shadow-2xl  hover:-translate-y-2 transition-transform duration-500 ease-in-out"
					/>
				</div> */}
			</div>
		</section>
	);
}
