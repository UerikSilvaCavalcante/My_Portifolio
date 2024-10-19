import Perfil from "../assets/perfil.jpeg";
import { Typewriter } from "./ui/typewriter";

export function Home() {
	return (
		<section
			className="w-full h-full  bg-gray-900 flex flex-col lg:flex-row items-center justify-center gap-8 px-5 py-3"
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
						Sou um desenvolvedor back-end júnior, apaixonado por tecnologia e programação. Tenho facilidade de aprendizado, e minhas principais linguagens são{" "}
						<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400">
							Python
						</span>{" "}
						e{" "}
						<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400">
							C#
						</span>
						. Atualmente, não estou empregado, mas estou sempre em busca de novas oportunidades e desafios.
					</p>
				</div>
			</div>
		</section>
	);
}
