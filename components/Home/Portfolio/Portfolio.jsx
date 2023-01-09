import React, { useContext } from "react";
import Context from "../../../context/ThemeContext";
import WebsitesImages from "./WebsitesImages/WebsitesImages";

const Portfolio = ({ show }) => {
  const { isLight } = useContext(Context);

  return (
    <section
      className={`${show ? "px-5 pt-2" : "translate-x-[26rem]"} ${
        isLight === "true" ? "" : "text-slate-50"
      } transition-transform duration-700 flex flex-col gap-4`}
    >
      {show ? (
        <>
          <div>
            <h1 className="font-semibold text-4xl md:text-5xl">Portfolio</h1>
            <div className="bg-amber-400 w-3/12 xl:w-[10%] h-1 mt-1" />
            <div className="bg-amber-400 w-2/12 xl:w-[5%] h-1 mt-1" />
          </div>

          <div>
            <h4 className="text-xl md:text-3xl font-medium my-4">My Last Projects:</h4>

            <WebsitesImages />
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Portfolio;
