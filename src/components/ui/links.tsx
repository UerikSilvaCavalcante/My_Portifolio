import "bootstrap-icons/font/bootstrap-icons.css";

interface LinkProps {
	href: string;
	name: string;
	icon: string;
	isActive: boolean;
	onClick: () => void;

	// children: React.ReactNode;
}

export function Link({ href, name, icon, isActive, onClick }: LinkProps) {
	return (
		<li>
			<a
				href={href}
				onClick={onClick}
				className={`${isActive ? "linkactive" : ""} text-xl flex gap-2 font-bold p-2 relative  bg-clip-text text-transparent bg-gradient-to-r from-green-600  to-teal-400 link`}
			>
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<i className={icon}></i>
				{name}
			</a>
		</li>
	);
}
