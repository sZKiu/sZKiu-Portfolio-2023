"use client";
import React, { useState, useEffect, useContext } from "react";
import Menubar from "../Menubar/Menubar";
import Moon_Sun from "../Menubar/Moon_Sun/Moon_Sun";
import Footer from "../Footer";
import Context from "../../../../context/StaticContext";
import ThemeContext from "../../../../context/ThemeContext";
import Principal from "../../Principal/Principal";
import About from "../../About/About";
import Services from "../../Services/Services";
import Portfolio from "../../Portfolio/Portfolio";
import Contact from "../../Contact/Contact";

const ShowPage = () => {
  const [pageActive, setPageActive] = useState("");
  const [mql, setMql] = useState(false);
  useEffect(() => {
    matchMedia("(min-width: 1280px)").matches ? setMql(true) : null;
  }, []);
  const { active } = useContext(Context);
  const { isLight } = useContext(ThemeContext);

  useEffect(() => {
    active === "" ? setPageActive("Home") : setPageActive(active);
  }, [active]);

  return (
    <>
      {mql ? null : <Menubar />}

      {mql ? (
        <div
          className={`${
            isLight === "true" ? "bg-slate-100 text-zinc-900" : "bg-zinc-900"
          } w-full`}
        >
          <Moon_Sun left={true} />

          <main
            id="main"
            className={`xl:min-h-[120vh] 2xl:min-h-[78.8vh] font-home overflow-x-hidden pb-4 px-12`}
          >
            <Principal show={pageActive === "Home"} />

            <About show={pageActive === "About"} />

            <Services show={pageActive === "Services"} />

            <Portfolio show={pageActive === "Portfolio"} />

            <Contact show={pageActive === "Contact"} />
          </main>

          <Footer />
        </div>
      ) : (
        <>
          <main
            id="main"
            className={`${
              isLight === "true" ? "bg-slate-100 text-zinc-900" : "bg-zinc-900"
            } ${
              mql ? "w-full" : "min-h-[84vh] md:min-h-[87vh]"
            } font-home overflow-x-hidden pb-4`}
          >
            <Principal show={pageActive === "Home"} />

            <About show={pageActive === "About"} />

            <Services show={pageActive === "Services"} />

            <Portfolio show={pageActive === "Portfolio"} />

            <Contact show={pageActive === "Contact"} />
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default ShowPage;
