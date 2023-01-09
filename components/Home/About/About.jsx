// import React from "react";
// import { BsFillPatchCheckFill } from "react-icons/bs";

// const About = ({ show }) => {
//   return (
//     <section
//       id="About"
//       className={`${
//         show ? "px-5 pt-2 translate-x-0" : "fixed top-0 -z-10"
//       } transition-transform duration-[3000ms] flex flex-col gap-4 text-slate-50 bg-zinc-900 font-home min-h-screen`}
//     >
//       <div>
//         <h1 className="font-semibold text-4xl">About Me</h1>
//         <div className="bg-amber-400 w-2/12 h-1 mt-1" />
//         <div className="bg-amber-400 w-1/12 h-1 mt-0.5" />
//       </div>

//       <h2 className="font-bold text-2xl">
//         {"I'm a"} <span className="text-amber-500">Front-End Developer</span>{" "}
//       </h2>

//       <p className="text-base">
//         Im Frontend developer, I want get experience in the right company, And
//         of course be useful for the company that hires me, One of my best skills
//         is the easy way I learn and the responsibility that I have when I will
//         work.
//       </p>

//       <div className="grid grid-cols-2 grid-rows-3 h-min gap-y-2 gap-x-4">
//         <div className="border-b border-b-zinc-400">
//           <h6 className="font-medium">Birhday:</h6>
//           <span className="text-sm">4 february 2004</span>
//         </div>
//         <div className="border-b border-b-zinc-400">
//           <h6 className="font-medium">Age:</h6>
//           <span className="text-sm">19</span>
//         </div>
//         <div className="border-b border-b-zinc-400">
//           <h6 className="font-medium">Last Website:</h6>
//           <span className="text-xs">www.lastdomain.com</span>
//         </div>
//         <div className="border-b border-b-zinc-400">
//           <h6 className="font-medium">Email:</h6>
//           <span className="text-xs">mendezwork28@gmail</span>
//         </div>
//         <div className="border-b border-b-zinc-400">
//           <h6 className="font-medium">Phone:</h6>
//           <span className="text-sm">+54 11 58986287</span>
//         </div>
//         <div className="border-b border-b-zinc-400">
//           <h6 className="font-medium">City:</h6>
//           <span className="text-sm w-full">Buenos Aires</span>
//         </div>
//       </div>

//       <div className="mt-2 text-sm flex gap-4">
//         <a
//           className="py-2 px-4 w-fit rounded-3xl bg-amber-500 hover:scale-110 transition duration-200"
//           // href={Photo.src}
//           // download
//         >
//           Download CV
//         </a>

//         <a
//           className="py-2 px-4 w-fit rounded-3xl bg-amber-500 hover:scale-110 transition duration-200"
//           // href={Photo.src}
//           // download
//         >
//           Espanish CV
//         </a>
//       </div>

//       <div className="grid gap-y-4 pb-4">
//         <h4 className="text-center text-2xl font-semibold">My Skills</h4>

//         <div className="mt-2 flex gap-2 flex-col bg-zinc-800 p-4 rounded-2xl">
//           <h5 className="text-center font-medium text-xl text-amber-400">
//             Front-End Developer
//           </h5>

//           <div className="grid grid-cols-2">
//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">HTML</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">Tailwind</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">Scss</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">JavaScript</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">React</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">Redux</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">Next Js</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">React Native</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-2 flex-col bg-zinc-800 p-4 rounded-2xl">
//           <h5 className="text-center font-medium text-xl text-amber-400">
//             Anothers Skills
//           </h5>

//           <div className="grid grid-cols-2 gap-x-2">
//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">GitHub</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">Bash</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">MarkDown</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <BsFillPatchCheckFill className="text-lg" />
//               <div>
//                 <h6 className="font-medium text-lg">Cypress</h6>
//                 <span className="text-sm">Advanced</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
'use client'
import React, { useContext } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Context from "../../../context/ThemeContext";
import EspañolCurriculum from "../../../assets/curriculum/EspañolCurriculum.png";
import EnglishCurriculum from "../../../assets/curriculum/Curriculum.png";

const About = ({ show }) => {
  const { isLight } = useContext(Context);
  const [mql, setMql] = useState(false);
  useEffect(() => {
    matchMedia("(min-width: 1280px)").matches ? setMql(true) : null;
  }, []);

  return (
    <section
      className={`${show ? "px-5 pt-2" : "translate-x-[26rem]"} ${
        isLight === "true" ? "" : "text-slate-50"
      }
      transition-transform duration-700 flex flex-col gap-4`}
    >
      {show ? (
        <>
          <div>
            <h1 className="font-semibold text-4xl md:text-5xl">About Me</h1>
            <div className="bg-amber-400 w-3/12 xl:w-[10%] h-1 mt-1" />
            <div className="bg-amber-400 w-2/12 xl:w-[5%] h-1 mt-1" />
          </div>

          <h2 className="font-bold text-2xl mt-4 md:text-3xl">
            {"I'm a"}{" "}
            <span className="text-amber-500">Front-End Developer</span>{" "}
          </h2>

          <p className="text-base md:text-lg xl:text-xl">
            Im Frontend developer, I want get experience in the right company,
            And of course be useful for the company that hires me, One of my
            best skills is the easy way I learn and the responsibility that I
            have when I will work.
          </p>

          <div className="grid grid-cols-2 grid-rows-3 h-min gap-y-2 md:gap-y-4 gap-x-4">
            <div className="border-b border-b-zinc-400">
              <h6 className="font-medium md:text-xl xl:text-2xl">Birhday:</h6>
              <span className="text-sm md:text-lg xl:text-lg">
                4 february 2004
              </span>
            </div>
            <div className="border-b border-b-zinc-400">
              <h6 className="font-medium md:text-xl xl:text-2xl">Age:</h6>
              <span className="text-sm md:text-lg">19</span>
            </div>
            <div className="border-b border-b-zinc-400">
              <h6 className="font-medium md:text-xl xl:text-2xl">
                Last Website:
              </h6>
              <span className="text-xs md:text-lg">movie-vel.vercel.app</span>
            </div>
            <div className="border-b border-b-zinc-400">
              <h6 className="font-medium md:text-xl xl:text-2xl">Email:</h6>
              <span className="text-xs md:text-lg">mendezwork28@gmail</span>
            </div>
            <div className="border-b border-b-zinc-400">
              <h6 className="font-medium md:text-xl xl:text-2xl">Phone:</h6>
              <span className="text-sm md:text-lg">+54 11 58986287</span>
            </div>
            <div className="border-b border-b-zinc-400">
              <h6 className="font-medium md:text-xl xl:text-2xl">City:</h6>
              <span className="text-sm w-full md:text-lg">Buenos Aires</span>
            </div>
          </div>

          <div className="mt-2 text-sm md:text-base xl:text-xl flex gap-4">
            <a
              className="py-2 px-4 w-fit rounded-3xl bg-amber-500 hover:scale-110 transition duration-200"
              href={EnglishCurriculum.src}
              download
            >
              Download CV
            </a>

            <a
              className="py-2 px-4 w-fit rounded-3xl bg-amber-500 hover:scale-110 transition duration-200"
              href={EspañolCurriculum.src}
              download
            >
              Espanish CV
            </a>
          </div>

          <div className="grid gap-y-4 pb-4">
            <h4 className="text-center text-2xl md:text-3xl font-semibold">
              My Skills
            </h4>

            {mql ? (
              <div className="flex justify-center gap-6" >
                <div
                  className={`${
                    isLight === "true" ? "bg-slate-200" : "bg-zinc-800"
                  } mt-2 flex gap-2 flex-col p-4 rounded-2xl xl:w-5/12`}
                >
                  <h5 className="text-center font-medium text-xl md:text-2xl text-amber-500">
                    Front-End Developer
                  </h5>

                  <div className="grid gap-y-2 grid-cols-2 md:grid-cols-3 md:justify-items-center">
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">HTML</h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Tailwind
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">Scss</h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          JavaScript
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          React
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Redux
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Next Js
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          React Native
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    isLight === "true" ? "bg-slate-200" : "bg-zinc-800"
                  } mt-2 flex gap-2 flex-col  p-4 rounded-2xl xl:w-5/12`}
                >
                  <h5 className="text-center font-medium text-xl text-amber-500 md:text-2xl">
                    Anothers Skills
                  </h5>

                  <div className="grid grid-cols-2 md:justify-items-center gap-y-2 gap-x-2">
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          GitHub
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">Bash</h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          MarkDown
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Cypress
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div
                  className={`${
                    isLight === "true" ? "bg-slate-200" : "bg-zinc-800"
                  } mt-2 flex gap-2 flex-col p-4 rounded-2xl xl:w-5/12`}
                >
                  <h5 className="text-center font-medium text-xl md:text-2xl text-amber-500">
                    Front-End Developer
                  </h5>

                  <div className="grid gap-y-2 grid-cols-2 md:grid-cols-3 md:justify-items-center">
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">HTML</h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Tailwind
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">Scss</h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          JavaScript
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          React
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Redux
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Next Js
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          React Native
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${
                    isLight === "true" ? "bg-slate-200" : "bg-zinc-800"
                  } mt-2 flex gap-2 flex-col  p-4 rounded-2xl xl:w-5/12`}
                >
                  <h5 className="text-center font-medium text-xl text-amber-500 md:text-2xl">
                    Anothers Skills
                  </h5>

                  <div className="grid grid-cols-2 md:justify-items-center gap-y-2 gap-x-2">
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          GitHub
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">Bash</h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          MarkDown
                        </h6>
                        <span className="text-sm md:text-base">Advanced</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsFillPatchCheckFill className="text-lg md:text-xl" />
                      <div>
                        <h6 className="font-medium text-lg md:text-xl">
                          Cypress
                        </h6>
                        <span className="text-sm md:text-base">
                          Intermediate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      ) : null}
    </section>
  );
};

export default About;
