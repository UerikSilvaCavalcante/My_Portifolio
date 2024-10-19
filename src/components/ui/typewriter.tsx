import React, { useState, useEffect } from "react";

interface TypewriterProps {
	text: string;
}

export const Typewriter = ({ text }: TypewriterProps) => {
	const [index, setIndex] = useState(0);
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [delay, setDelay] = useState(300);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isDeleting) {
				setDisplayedText((prev) => prev + text[index]);
				setIndex((prevIndex) => prevIndex + 1);
				if (index === text.length - 1) {
					setIsDeleting(true);
					setDelay(2000); // Delay after finishing typing
				}
			} else {
				setDelay(300);
				setDisplayedText((prev) => prev.slice(0, -1));
				setIndex((prevIndex) => prevIndex - 1);
				if (index === 1) {
					setIsDeleting(false);
					// Reset delay for typing
				}
			}
		}, delay);

		return () => clearInterval(interval);
	}, [index, isDeleting, text, delay]);

	return (
		<div className="flex items-end" >
			<h1 className="text-6xl w-fit p-1 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 glow-text ">
				{displayedText}
			</h1>
            <div className="w-5 h-1 bg-green-500 pulser">

            </div>
		</div>
	);
};
