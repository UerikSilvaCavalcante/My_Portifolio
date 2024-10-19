import { Home } from "./home";
import { About } from "./about";
import { Tecnologies } from "./tecnologies";
import { Projects } from "./projects";
import { Contact } from "./contacts";

export function Body() {
	return (
		<div className="scroll-smooth w-full h-full bg-gray-900 flex flex-col px-1 py-24 pt-48 gap-56 border-r-4 border-l-4 border-teal-400 ">
			<Home />
			<About />
			<Tecnologies />
			<Projects />
			<Contact />
		</div>
	);
}
