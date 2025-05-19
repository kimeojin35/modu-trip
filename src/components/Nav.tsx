import React from "react";
import { House, Wavy_Check, Calendar, User } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nav = [
    { icon: <House size={30} />, text: "여행", link: "/" },
    { icon: <Wavy_Check size={30} />, text: "투두", link: "/todo" },
    { icon: <Calendar size={30} />, text: "일정", link: "/schedule" },
    { icon: <User size={30} />, text: "MY", link: "/my" },
  ];
  return (
    <div className="fixed bottom-0 flex justify-center w-full max-w-5xl bg-gradient-to-t to-transparent via-[#111] from-[#111] z-10">
      <div className="flex justify-between w-full max-w-md">
        {nav.map(({ icon, text, link }) => (
          <div
            onClick={() => navigate(link)}
            className={`flex flex-col items-center gap-1 px-6 py-4 text-white cursor-pointer ${
              location.pathname == link ? "text-white" : "text-zinc-500"
            }`}
          >
            {icon}
            <p className="text-medium12">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
