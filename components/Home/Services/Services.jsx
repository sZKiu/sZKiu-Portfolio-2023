import React, { useContext } from "react";
import Context from "../../../context/ThemeContext";
import {
  BsPhoneFill,
  BsFillMegaphoneFill,
  BsPaintBucket,
} from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Services = ({ show }) => {
  const { isLight } = useContext(Context);

  return (
    <section
      className={`${show ? "px-5 pt-2" : "translate-x-[26rem]"}
      ${isLight === "true" ? "" : "text-slate-50"}
      transition-transform duration-700 flex flex-col gap-4`}
    >
      {show ? (
        <>
          <div>
            <h1 className="font-semibold text-4xl md:text-5xl">Services</h1>
            <div className="bg-amber-400 w-3/12 xl:w-[10%] h-1 mt-1" />
            <div className="bg-amber-400 w-2/12 xl:w-[5%] h-1 mt-1" />
          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 xl:grid-cols-3 xl:mt-6">
            <div
              className={`${
                isLight === "true"
                  ? "bg-gray-300/80 border-2 border-slate-100"
                  : "bg-zinc-800 border-2 border-zinc-600"
              } h-[264px] md:h-full p-6 text-center rounded-lg grid md:gap-4 justify-items-center`}
            >
              <BsPhoneFill
                className={`${
                  isLight === "true" ? "" : "text-amber-400"
                } text-4xl md:text-5xl`}
              />
              <h5 className="font-semibold text-lg md:text-xl h-min self-center">
                Android and IOS Developer
              </h5>
              <p className="md:text-lg">
                I am a React Developer, for that reason I know how to use React
                Native, for now i made X pages with this tecnologie.
              </p>
            </div>

            <div
              className={`${
                isLight === "true"
                  ? "bg-gray-300/80 border-2 border-slate-100"
                  : "bg-zinc-800 border-2 border-zinc-600"
              } p-4 text-center rounded-lg grid justify-items-center gap-2`}
            >
              <MdComputer
                className={`${
                  isLight === "true" ? "" : "text-amber-400"
                } text-4xl md:text-5xl`}
              />
              <h5 className="font-semibold text-lg md:text-xl h-min self-center">
                Web Developer
              </h5>
              <p className="md:text-lg">
                I made the right way to be a good web developer, First HTML, Css
                and Javascript, Second React and Its Libraries, and Third Next
                JS, 12 and 13. I made X pages for now, I know a lot of things
                about React, Next and the things that I love.
              </p>
            </div>

            <div
              className={`${
                isLight === "true"
                  ? "bg-gray-300/80 border-2 border-slate-100"
                  : "bg-zinc-800 border-2 border-zinc-600"
              } p-4 text-center rounded-lg grid justify-items-center gap-2`}
            >
              <BsPaintBucket
                className={`${
                  isLight === "true" ? "" : "text-amber-400"
                } text-4xl md:text-5xl md:self-center`}
              />
              <h5 className="font-semibold text-lg md:text-xl h-min self-center">
                UX / UI Designer
              </h5>
              <p className="md:text-lg">
                When I start, I see and made a lot of pages and videos about
                UX/UI Desing, for that, I know the core things about this.
              </p>
            </div>

            <div
              className={`${
                isLight === "true"
                  ? "bg-gray-300/80 border-2 border-slate-100"
                  : "bg-zinc-800 border-2 border-zinc-600"
              } p-4 text-center rounded-lg grid justify-items-center gap-2`}
            >
              <HiMagnifyingGlass
                className={`${
                  isLight === "true" ? "" : "text-amber-400"
                } text-4xl md:text-5xl`}
              />
              <h5 className="font-semibold text-lg md:text-xl h-min self-center">
                Good Searcher
              </h5>
              <p className="md:text-lg">
                {`All what I know is a free information, but, you need to know how search it. When I have a problem I don't excuse myself for don't made it, I resolve it, because I won't give you problems or excuses, but solutions.`}
              </p>
            </div>

            <div
              className={`${
                isLight === "true"
                  ? "bg-gray-300/80 border-2 border-slate-100"
                  : "bg-zinc-800 border-2 border-zinc-600"
              } p-4 text-center rounded-lg grid justify-items-center gap-2 md:gap-4`}
            >
              <BsFillMegaphoneFill
                className={`${
                  isLight === "true" ? "" : "text-amber-400"
                } text-4xl md:text-5xl`}
              />
              <h5 className="font-semibold text-lg md:text-xl h-min self-center">
                Good Employee
              </h5>
              <p className="md:text-lg">
                For my actitude, I am a quiet guy, I want to work, feel useceful
                and help people, that includes my partners in a job, because, I
                am a Programer, I solve problems, i do not cause them.
              </p>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Services;
