import { CardSocials } from "./ui/cardSocials";

export function Contact() {
	return (
		<section
			className="w-full h-full  bg-gray-900 flex flex-col items-center justify-center gap-8 p-8"
			id="contact"
		>
			<div className="flex flex-col items-center justify-center gap-2">
				<h1 className="flex text-center text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 font-bold">
					Do you Like?
				</h1>
				<div className="flex flex-col gap-3 items-center justify-center">
					<h1 className="flex text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 font-bold">
						Contact me
					</h1>
					<div className="flex items-center justify-center cardAbout ">
						<div className="z-10 border-4 border-teal-400 bg-gray-900 px-5 py-2 rounded-md">
							<a
								href="*"
								className="text-teal-400 text-xl font-bold flex gap-3 "
							>
								Say Hello
								<i className="bi bi-send">
									{/* sdsds */}
								</i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<h1 className="flex text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 font-bold border-b-2 border-teal-400 p-2">
				My Socials
			</h1>
			<div className="flex justify-center items-center gap-2" id="cards">
				<CardSocials icon="bi-instagram" title="Instagram" href="*" />
				<CardSocials
					icon="bi-github"
					title="Github"
					href="https://github.com/UerikSilvaCavalcante"
				/>
				<CardSocials
					icon="bi-linkedin"
					title="Linkdin"
					href="https://www.linkedin.com/in/uerik-saldanha-1955292bb/?originalSubdomain=br"
				/>
			</div>
		</section>
	);
}
