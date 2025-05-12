interface InputProps {
  title?: string;
  errorMessage?: string;
  placeholder?: string;
  description?: string;
}
export const Input = ({ title, placeholder, description }: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <p className="text-medium14 text-zinc-400">{title}</p>
      <div className="flex w-full border rounded-md border-zinc-800 bg-zinc-900">
        <input
          placeholder={placeholder}
          className="w-full px-4 py-2.5 bg-transparent placeholder:text-zinc-600"
        />
      </div>
      <p className="w-full text-medium14 text-zinc-500">{description}</p>
    </div>
  );
};
