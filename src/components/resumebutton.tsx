import Resume from "../assets/Uerik Saldanha Curriculo Profissional.pdf";
import { useTranslation } from "react-i18next";

export function ResumeButton() {
	return (
		<a
			href={Resume}
			className="button fixed top-4 right-10  md:translate-y-[600px] z-40 transition duration-300 ease-in-out"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span className="button__icon-wrapper">
				<i className="bi bi-arrow-up-right button__icon-svg"></i>

				<i className="bi bi-arrow-up-right button__icon-svg button__icon-svg--copy"></i>
			</span>
			Curriculo
		</a>
	);
}
