"use client";
import React, { useContext } from "react";
import Context from "../../../context/ThemeContext";
import CloseHeader from "./CloseHeader/CloseHeader";
import UlShowPages from "./UlShowPages/UlShowPages";

const Header = () => {
  const { isLight } = useContext(Context);
  const mql = matchMedia("(min-width: 1280px)");

  return (
    <>
      <header
        id="header"
        data-show={false}
        className={`${isLight === "true" ? "bg-slate-200" : "bg-zinc-800"} ${
          mql.matches
            ? "w-3/12"
            : "fixed -translate-x-[99rem] opacity-0 top-0 left-0 right-0 bottom-0 w-4/6"
        } flex justify-center pt-12 md:pt-16 z-50 transition-all duration-500`}
      >
        <div className="fixed">
          <div className="flex gap-14 flex-col text-white">
            <div className="text-4xl md:text-6xl font-bold relative py-2 px-4">
              <div className="absolute top-0 right-0 border-r-4 border-t-4 border-amber-400 w-6 h-6" />
              <h2 className={`${isLight === "true" ? "text-zinc-800" : ""}`}>
                <span className="text-amber-400 font-['Cambria']">sZ</span>Kiu
              </h2>
              <div className="absolute bottom-0 left-0 border-l-4 border-b-4 border-amber-400 w-6 h-6" />
            </div>

            <UlShowPages />
          </div>

          <CloseHeader />
        </div>
      </header>

      {mql.matches ? null : (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/[0.7] transition-opacity duration-500 opacity-0 -translate-x-[99rem] z-40" />
      )}
    </>
  );
};

export default Header;
