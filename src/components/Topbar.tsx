import React from "react";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../assets";

interface TopbarProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export const Topbar = ({ icon, onClick, title }: TopbarProps) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 flex items-center justify-between w-full px-2 bg-[#111]">
      <button onClick={() => navigate(-1)} className="p-4">
        <Arrow direction="left" className="text-white" />
      </button>
      <p className="text-white text-medium16">{title}</p>
      {icon ? (
        <button onClick={onClick} className="p-4">
          {icon}
        </button>
      ) : (
        <div className="w-14 h-14" />
      )}
    </div>
  );
};
