import { useState } from 'react';
import { Hide, Show } from '../assets';

interface InputProps {
	title?: string;
	errorMessage?: string;
	placeholder?: string;
	description?: string;
	value?: string;
	onChange?: () => string;
	type?: 'password' | 'text';
}
export const Input = ({ title, placeholder, description, value, onChange, type }: InputProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	console.log(showPassword ? 'show' : 'hide');

	return (
		<div className="flex flex-col w-full gap-2">
			<p className="text-medium14 text-zinc-400">{title}</p>
			<div className="flex hover:border-zinc-700 focus-within:hover:border-optic-600 focus-within:border-optic-600 transition-all w-full border rounded-md border-zinc-800 bg-zinc-900">
				<input
					type={showPassword && type == 'password' ? 'password' : 'text'}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="w-full focus:border-zinc px-4 py-2.5 bg-transparent placeholder:text-zinc-600"
				/>
				{type == 'password' && (
					<button onClick={() => setShowPassword((prev) => !prev)} className="text-zinc-500 pr-4">
						{showPassword ? <Show /> : <Hide />}
					</button>
				)}
			</div>
			<p className="w-full text-medium14 text-zinc-500">{description}</p>
		</div>
	);
};
