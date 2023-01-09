"use client";
import React, { useContext } from "react";
import Context from "../../../context/ThemeContext";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const { isLight } = useContext(Context);

  return (
    <footer
      className={`${
        isLight === "false"
          ? "border-amber-400 bg-zinc-900 text-white"
          : "border-zinc-900 bg-slate-100"
      } border-t-2 flex flex-col items-center`}
    >
      <p className="font-regular text-sm md:text-xl mt-2">
        ©2023 sZKiu Porfolio. All Rights Reserved
      </p>

      <div
        className={`my-3 flex gap-4 text-2xl md:text-3xl xl:text-5xl ${
          isLight === "false" ? " text-white" : ""
        }`}
      >
        <a
          href="https://www.linkedin.com/in/augusto-andres-mendez-55688b220/"
          target="_blank"
          rel="noreferrer nooopener"
        >
          <AiFillLinkedin className="hover:text-amber-500 transition duration-300" />
        </a>

        <a
          href="https://github.com/sZKiu"
          target="_blank"
          rel="noreferrer nooopener"
        >
          <AiFillGithub className="hover:text-amber-500 transition duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
