"use client";
import React, { useContext } from "react";
import Moon_Sun from "./Moon_Sun/Moon_Sun";
import Context from "../../../../context/ThemeContext";
import { AiOutlineMenu } from "react-icons/ai";

const Menubar = () => {
  const { isLight } = useContext(Context);
  const handleShowHeader = () => {
    const header = document.getElementById("header");
    const blackMask = header.nextElementSibling;

    if (header.dataset.show === "false") {
      header.dataset.show = "true";
      header.classList.add("opacity-1");
      header.classList.add("translate-x-0");
      header.classList.remove("opacity-0");
      header.classList.remove("-translate-x-[99rem]");
      blackMask.classList.add("opacity-1");
      blackMask.classList.add("translate-x-0");
      blackMask.classList.remove("opacity-0");
      blackMask.classList.remove("-translate-x-[99rem]");
    }
  };

  return (
    <div
      className={`${
        isLight === "true" ? "bg-slate-100" : "bg-zinc-900 text-white"
      } py-4 px-2 sticky z-[30] top-0 flex justify-between`}
    >
      <div
        onClick={handleShowHeader}
        className={`${
          isLight === "true"
            ? ""
            : "text-white"
        } bg-transparent border-transparent cursor-pointer p-2 rounded-lg border-2 transition duration-300`}
      >
        <AiOutlineMenu
          className={`${
            isLight === "true" ? "text-black" : "text-amber-400"
          } text-2xl md:text-3xl`}
        />
      </div>

      <Moon_Sun />
    </div>
  );
};

export default Menubar;
