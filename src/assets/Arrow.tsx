import { IconProps } from '.';

export const Arrow = ({ size = 24, className, direction = 'right' }: IconProps) => {
	const rotate = {
		right: 'rotate-0',
		left: 'rotate-180',
		up: '-rotate-90',
		down: 'rotate-90',
	};
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			className={`${rotate[direction]} ${className}`}
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="m10 8 4 4-4 4"
			/>
		</svg>
	);
};
