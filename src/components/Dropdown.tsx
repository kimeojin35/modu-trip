import { useState } from 'react';
import { Arrow } from '../assets';

interface DropdownProps {
	defaultValue: string;
	options: string[];
	onSelect: (value: string) => void;
}

export const Dropdown = ({ defaultValue, options, onSelect }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(defaultValue);

	const handleSelect = (value: string) => {
		setSelected(value);
		onSelect(value);
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left">
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className="flex transition-all items-center border-zinc-700 justify-between w-40 px-4 py-2 text-sm font-medium bg-zinc-900 border rounded-lg shadow hover:bg-zinc-800"
			>
				{selected}
				<Arrow className="text-zinc-500" direction={isOpen ? 'up' : 'down'} />
			</button>

			{isOpen && (
				<div className="absolute z-10 w-40 mt-2 border-zinc-700 bg-zinc-900 border rounded-lg shadow-lg p-1">
					{options.map((option) => (
						<div
							key={option}
							onClick={() => handleSelect(option)}
							className="px-3 py-2 text-medium14 text-zinc-200 rounded-md cursor-pointer hover:bg-zinc-800"
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
