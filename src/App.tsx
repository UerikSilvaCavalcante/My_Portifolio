import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Body } from "./components/body";
import { useEffect } from "react";
import { MobileNavbar } from "./components/mobilenavbar";
import { ResumeButton } from "./components/resumebutton";


function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<div className="w-full bg-gray-900 px-4">
				<ResumeButton />
				{isMobile ? <MobileNavbar /> : <Navbar />}
				<Body />
			</div>
		</>
	);
}

export default App;
