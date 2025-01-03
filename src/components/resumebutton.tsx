import Resume from "../assets/Curriculo Profissional Uerik Saldanha.pdf";

export function ResumeButton() {
	return (
		<a
			href={Resume}
			className="button fixed top-4 right-10  md:translate-y-[600px] z-40 transition duration-300 ease-in-out"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span className="button__icon-wrapper">
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<i className="bi bi-arrow-up-right button__icon-svg"></i>

				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<i className="bi bi-arrow-up-right button__icon-svg button__icon-svg--copy"></i>
			</span>
			Curriculo
		</a>
	);
}
