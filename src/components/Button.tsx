import React from "react";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: "primary" | "white";
  onClick?: () => void;
  isFull?: boolean;
  isBig?: boolean;
}

export const Button = ({
  disabled,
  onClick,
  icon,
  type = "primary",
  title,
  isFull,
  isBig,
}: ButtonProps) => {
  const styles = {
    primary: "bg-optic-500 border border-optic-600 text-zinc-900",
    white: "bg-white text-zinc-900 hover:bg-zinc-200",
  };
  return (
    <button
      disabled={disabled}
      className={`rounded-md text-medium14 items-center justify-center flex px-4 gap-2 ${
        styles[type]
      } ${isFull ? "w-full" : "w-fit"} ${isBig ? "h-12" : "h-10"}`}
      onClick={onClick}
    >
      {icon}
      <p className="text-medium16">{title}</p>
    </button>
  );
};
