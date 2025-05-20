interface BadgeProps {
	color?: string;
	children?: React.ReactNode;
}

export const Badge = ({ color = '#fff', children }: BadgeProps) => {
	return (
		<div className="w-fit rounded-md px-1.5 py-0.5 text-medium14 bg-optic-400/20 text-optic-600">{children}</div>
	);
};
