"use client";
import React, { useContext, useEffect, useState } from "react";
import Context from "../../../../../context/ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Moon_Sun = ({ left }) => {
  const { isLight, setIsLight } = useContext(Context);
  const [colorMode_SK, setColorMode_SK] = useState("false");
  useEffect(() => {
    setColorMode_SK(localStorage.getItem("lightmode-sk"));
  }, []);

  if (colorMode_SK !== "false" && !colorMode_SK) {
    localStorage.setItem("lightmode-sk", "false");
    setIsLight("false");
  } else if (colorMode_SK === "true") {
    localStorage.setItem("lightmode-sk", "true");
    setIsLight("true");
  }

  const handlerChangeDarkMode = () => {
    if (colorMode_SK !== null) {
      if (isLight === "false") {
        localStorage.setItem("lightmode-sk", "true");
        setIsLight("true");
      } else {
        localStorage.setItem("lightmode-sk", "false");
        setIsLight("false");
      }
    }
  };

  return (
    <div
      className={`p-2 transition duration-300 hover:text-amber-400 ${
        isLight === "true" ? "" : "text-white"
      } ${left ? "flex justify-end pr-16 pt-8" : ""}`}
    >
      {isLight === "false" ? (
        <BsFillSunFill
          onClick={handlerChangeDarkMode}
          className="text-2xl md:text-3xl cursor-pointer"
        />
      ) : (
        <BsFillMoonFill
          onClick={handlerChangeDarkMode}
          className="text-2xl md:text-3xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Moon_Sun;
