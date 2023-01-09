"use client";
import React, { useContext } from "react";
import Context from "../../../../context/StaticContext";
import ThemeContext from "../../../../context/ThemeContext";
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiFillWechat,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";

const UlShowPages = () => {
  const { isLight } = useContext(ThemeContext);
  const { active, setActive } = useContext(Context);
  const mql = matchMedia("(min-width: 1280px)");
  const handlerChangeActive = (e) => {
    const header = document.getElementById("header");
    const blackMask = header.nextElementSibling;
    setActive(e.target.textContent);

    header.dataset.show = "false";
    header.classList.remove("translate-x-0");
    header.classList.add("-translate-x-[99rem]");
    header.classList.remove("opacity-1");
    header.classList.add("opacity-0");

    blackMask.classList.remove("translate-x-0");
    blackMask.classList.add("-translate-x-[99rem]");
    blackMask.classList.add("opacity-0");
    blackMask.classList.remove("opacity-1");
  };
  const setPage = (e) => {
    setActive(e.target.textContent);
  };

  return (
    <ul
      className={`${
        isLight === "true" ? "text-zinc-800" : ""
      } flex flex-col gap-6 md:gap-10 font-['Roboto']`}
    >
      <li
        onClick={mql.matches ? setPage : handlerChangeActive}
        data-page="Principal"
        className="flex items-center justify-start gap-2 pb-1 border-b border-zinc-500 transition duration-300 hover:text-amber-400 cursor-pointer text-lg md:text-2xl font-medium"
      >
        <AiFillHome className="text-xl md:text-3xl" />
        Home
      </li>

      <li
        onClick={mql.matches ? setPage : handlerChangeActive}
        data-page="About"
        className="flex items-center justify-start gap-2 pb-1 border-b border-zinc-500 transition duration-300 hover:text-amber-400 cursor-pointer text-lg md:text-2xl font-medium"
      >
        <BsFillPersonFill className="text-xl md:text-3xl" />
        About
      </li>

      <li
        onClick={mql.matches ? setPage : handlerChangeActive}
        data-page="Services"
        className="flex items-center justify-start gap-2 pb-1 border-b border-zinc-500 transition duration-300 hover:text-amber-400 cursor-pointer text-lg md:text-2xl font-medium"
      >
        <AiOutlineUnorderedList className="text-xl md:text-3xl" />
        Services
      </li>

      <li
        onClick={mql.matches ? setPage : handlerChangeActive}
        data-page="Portfolio"
        className="flex items-center justify-start gap-2 pb-1 border-b border-zinc-500 transition duration-300 hover:text-amber-400 cursor-pointer text-lg md:text-2xl font-medium"
      >
        <FaToolbox className="text-xl md:text-3xl" />
        Portfolio
      </li>

      <li
        onClick={mql.matches ? setPage : handlerChangeActive}
        data-page="Contact"
        className="flex items-center justify-start gap-2 pb-1 border-b border-zinc-500 transition duration-300 hover:text-amber-400 cursor-pointer text-lg md:text-2xl font-medium"
      >
        <AiFillWechat className="text-xl md:text-4xl" />
        Contact
      </li>
    </ul>
  );
};

export default UlShowPages;
