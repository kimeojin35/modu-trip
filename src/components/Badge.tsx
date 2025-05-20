type BadgeColor = 'primary' | 'secondary' | 'success' | 'danger';

interface BadgeProps {
	color?: BadgeColor;
	children: React.ReactNode;
}

export const Badge = ({ color = 'primary', children }: BadgeProps) => {
	const colorClasses = {
		primary: 'bg-blue-100 text-blue-800',
		secondary: 'bg-gray-100 text-gray-800',
		success: 'bg-green-100 text-green-800',
		danger: 'bg-red-100 text-red-800',
	};

	return <div className={`w-fit rounded-md px-1.5 py-0.5 text-medium14 ${colorClasses[color]}`}>{children}</div>;
};
