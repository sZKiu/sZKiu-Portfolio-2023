"use client";
import React, { useContext } from "react";
import ThemeContext from "../../../../context/ThemeContext";
import { ImCross } from "react-icons/im";

const CloseHeader = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        const header = document.getElementById("header");
        const blackMask = header.nextElementSibling;
        header.dataset.show = "false";
        header.classList.remove("translate-x-0");
        header.classList.add("-translate-x-[99rem]");

        blackMask.classList.remove("translate-x-0");
        blackMask.classList.remove("opacity-1");
        blackMask.classList.add("opacity-0");
        blackMask.classList.add("-translate-x-[99rem]");
      }}
      className={`${
        isLight === "true"
          ? "bg-slate-100 border-zinc-800 border-2"
          : "text-amber-400 bg-zinc-800 border-gray-400 hover:bg-gray-600"
      } fixed -right-20 md:-right-32 top-4 md:top-6 rounded-lg border p-2 transition duration-300 cursor-pointer`}
    >
      <ImCross className="md:text-2xl" />
    </div>
  );
};

export default CloseHeader;
