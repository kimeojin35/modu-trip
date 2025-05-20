import { IconProps } from '.';

export const Arrow_Long = ({ size = 24, className, direction = 'right' }: IconProps) => {
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
			className={`${className} ${rotate[direction]}`}
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M5 12h14m0 0-6-6m6 6-6 6"
			/>
		</svg>
	);
};
