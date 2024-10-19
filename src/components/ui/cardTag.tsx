interface CardTagProps {
	tag: string;
}

export function CardTag({ tag }: CardTagProps) {
	return (
		<div className="flex items-center justify-center gap-2">
			<div className="flex items-center justify-center cursor-default bg-gradient-to-r from-green-600 to-teal-400 text-gray-900 px-3  rounded-full hover:-translate-y-1 transition-transform duration-300 ease-out">
				<p>{tag}</p>
			</div>
		</div>
	);
}
