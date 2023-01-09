// import React from "react";

// const Principal = ({ show }) => {
//   return (
//     <section
//       className={`${
//         show ? "px-5 pt-8 translate-x-0" : "fixed top-0"
//       } transition-transform duration-[3000ms] text-slate-50 bg-zinc-900 font-home min-h-screen`}
//     >
//       <div className="grid gap-4">
//         <h1 className="font-bold text-3xl">
//           Hello, my name is{" "}
//           <span className="font-['Georgia']  text-amber-500">
//             Augusto Mendez
//           </span>
//         </h1>

//         <h2 className="font-bold text-2xl">
//           {"I'm a"} <span className="text-amber-500">Front-End Developer</span>{" "}
//         </h2>

//         <p className="text-base">
//           Im Frontend developer, I want get experience in the right company, And
//           of course be useful for the company that hires me, One of my best
//           skills is the easy way I learn and the responsibility that I have when
//           I will work.
//         </p>

//         <button className="py-2 mt-4 px-6 w-fit rounded-3xl bg-amber-500 hover:scale-110 transition duration-200 ">
//           More About Me
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Principal;

import React, { useContext } from "react";
import ButtonPrincipal from "./ButtonPrincipal/ButtonPrincipal";
import Context from "../../../context/ThemeContext";
import AugustoImage from "../../../assets/augusto-images/Picture-about-me-face-green-shirt-PhotoRoom-PhotoRoom.png";

const Principal = ({ show }) => {
  const { isLight } = useContext(Context);
  const mq_image = matchMedia("(min-width: 768px)");
  const mql_large = matchMedia("(min-width: 1280px");

  return (
    <>
      {mql_large.matches ? (
        <section
          className={`${show ? "px-5 pt-8" : "translate-x-[26rem]"} ${
            isLight === "true" ? "text-zinc-900" : "text-slate-50"
          } transition-transform duration-700 flex`}
        >
          {show ? (
            <>
              <div className="grid md:gap-6 w-[70%] h-min self-center">
                <h1 className="font-bold text-3xl md:text-5xl">
                  Hello, my name is{" "}
                  <span className="font-['Georgia']  text-amber-500">
                    Augusto Mendez
                  </span>
                </h1>

                <h2 className="font-bold text-2xl md:text-4xl">
                  {"I'm a"}{" "}
                  <span className="text-amber-500">Front-End Developer</span>{" "}
                </h2>

                <p className="text-base md:text-xl">
                  Im Frontend developer, I want get experience in the right
                  company, And of course be useful for the company that hires
                  me, One of my best skills is the easy way I learn and the
                  responsibility that I have when I will work.
                </p>

                <ButtonPrincipal />
              </div>

              <div className="my-o mx-auto relative p-8 w-[30%]">
                <div className="absolute top-0 right-0 border-r-8 border-t-8 border-amber-400 w-10 h-10" />
                <img src={AugustoImage.src} alt="Augusto Image" />
                <div className="absolute bottom-0 left-0 border-l-8 border-b-8 border-amber-400 w-10 h-10" />
              </div>
            </>
          ) : null}
        </section>
      ) : (
        <section
          className={`${
            show ? "px-5 pt-8" : "translate-x-[26rem]"
          } transition-transform duration-700 grid gap-4 md:gap-6 ${
            isLight === "true" ? "text-zinc-900" : "text-slate-50"
          }`}
        >
          {show ? (
            <>
              {mq_image.matches ? (
                <div className="my-o mx-auto relative p-8">
                  <div className="absolute top-0 right-0 border-r-8 border-t-8 border-amber-400 w-10 h-10" />
                  <img
                    src={AugustoImage.src}
                    alt="Augusto Image"
                    className="h-[24rem]"
                  />
                  <div className="absolute bottom-0 left-0 border-l-8 border-b-8 border-amber-400 w-10 h-10" />
                </div>
              ) : null}

              <h1 className="font-bold text-3xl md:text-5xl">
                Hello, my name is{" "}
                <span className="font-['Georgia']  text-amber-500">
                  Augusto Mendez
                </span>
              </h1>

              <h2 className="font-bold text-2xl md:text-4xl">
                {"I'm a"}{" "}
                <span className="text-amber-500">Front-End Developer</span>{" "}
              </h2>

              <p className="text-base md:text-xl">
                Im Frontend developer, I want get experience in the right
                company, And of course be useful for the company that hires me,
                One of my best skills is the easy way I learn and the
                responsibility that I have when I will work.
              </p>

              <ButtonPrincipal />
            </>
          ) : null}
        </section>
      )}
    </>
  );
};

export default Principal;
