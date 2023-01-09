"use client";
import React, { useContext } from "react";
import Context from "../../../../context/StaticContext";

const ButtonPrincipal = () => {
  const { active, setActive } = useContext(Context);

  return (
    <button
      onClick={() => setActive("About")}
      className="py-2 mt-4 px-6 w-fit rounded-3xl bg-amber-500 hover:scale-110 transition duration-200 md:text-xl"
    >
      More About Me
    </button>
  );
};

export default ButtonPrincipal;
