import React, { useContext } from "react";
import Context from "../../../context/ThemeContext";
import { AiFillPhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";
import ContactForm from "./ContactForm/ContactForm";

const Contact = ({ show }) => {
  const { isLight } = useContext(Context);

  return (
    <section
      className={`${show ? "px-5 pt-2" : "translate-x-[26rem]"} ${
        isLight === "true" ? "" : "text-slate-50"
      }  transition-transform duration-700 flex flex-col gap-4 xl:gap-8`}
    >
      {show ? (
        <>
          <div>
            <h1 className="font-semibold text-4xl md:text-5xl">Contact</h1>
            <div className="bg-amber-400 w-3/12 xl:w-[10%] h-1 mt-1" />
            <div className="bg-amber-400 w-2/12 xl:w-[5%] h-1 mt-1" />
          </div>

          <div className="mt-4">
            <h3 className="text-center text-2xl md:text-3xl xl:text-4xl text-amber-400 font-bold">
              Have You Any Questions?
            </h3>
            <h4 className="text-center text-lg md:text-xl xl:text-2xl mt-2 font-semibold">
              {"I'M AT YOUR SERVICE"}
            </h4>

            <div className="flex flex-col xl:flex-row xl:justify-between mt-4 items-center gap-4">
              <div className="flex flex-col items-center gap-1 md:gap-2 xl:min-w-[270px]">
                <AiFillPhone className="text-3xl md:text-4xl xl:text-5xl text-amber-400" />
                <h5 className="text-lg md:text-xl font-semibold">Call Me On</h5>
                <p className="text-sm md:text-base">+54 11 58986287</p>
              </div>

              <div className="flex flex-col items-center gap-1 md:gap-2">
                <BiMap className="text-3xl md:text-4xl xl:text-5xl text-amber-400" />
                <h5 className="text-lg md:text-xl font-semibold">Office</h5>
                <p className="text-sm md:text-base text-center">
                  Tacuarí 1070, Ramos Mejia, Buenos Aires, Argentina
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 md:gap-2">
                <SlEnvolopeLetter className="text-3xl xl:text-5xl text-amber-400" />
                <h5 className="text-lg md:text-xl font-semibold">Email</h5>
                <p className="text-sm md:text-base">
                  augustomendez544@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-center text-amber-400 text-xl md:text-3xl font-semibold">
              SEND ME AN EMAIL
            </h2>
            <h3 className="text-center mt-2 font-medium md:text-lg">
              I AM A VERY RESPONSIVE TO MESSAGES
            </h3>

            <ContactForm />
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Contact;
