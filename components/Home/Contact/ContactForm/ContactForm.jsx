import React, { useEffect, useContext, useState } from "react";
import Context from "../../../../context/ThemeContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/ClipLoader";
import { MdVerified } from "react-icons/md";
import { VscError } from "react-icons/vsc";

const validateEmail = (values) => {
  let email;

  if (!values) {
    email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    email = "Invalid email address";
  }

  return email;
};

const validateName_Subject = (values) => {
  let name_subject;

  if (!values) {
    name_subject = "Required";
  } else if (values.length > 128) {
    name_subject = "Too long";
  } else if (values.length < 4) {
    name_subject = "Too short";
  }

  return name_subject;
};

const validateMessage = (values) => {
  let message;

  if (!values) {
    message = "Required";
  } else if (values.length > 256) {
    message = "Too long";
  } else if (values.length < 4) {
    message = "Too short";
  }

  return message;
};

const ContactForm = () => {
  const [stateForm, setStateForm] = useState({
    loading: false,
    error: false,
    show: false,
  });
  const { isLight } = useContext(Context);

  function SendEmail(object) {
    emailjs
      .send("service_h42817a", "template_8pv4bo6", object, "AAbW2_r7N_NC5nuwd")
      .then(
        (result) => {
          setStateForm({
            loading: false,
            error: false,
            show: true,
          });
          setTimeout(() => {
            setStateForm({
              loading: false,
              error: false,
              show: false,
            });
          }, 1500);
        },
        (error) => {
          setStateForm({
            loading: false,
            error: true,
            show: true,
          });
          setTimeout(() => {
            setStateForm({
              loading: false,
              error: true,
              show: false,
            });
          }, 1500);
        }
      );
  }

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={(values, actions) => {
          setStateForm({ loading: true, error: false, show: true });
          SendEmail(values);
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
          }, 700);
        }}
      >
        {() => (
          <Form
            autoComplete="new-password"
            className="mt-4 flex flex-col gap-5 items-center px-2 md:px-8"
          >
            <div className="w-full text-sm md:text-lg text-amber-500">
              <Field
                placeholder="Name"
                name="name"
                validate={validateName_Subject}
                className={`${
                  isLight === "true"
                    ? "border border-slate-300"
                    : "bg-zinc-800 text-slate-100 border border-zinc-600"
                } outline-none py-2 md:py-[0.6rem] pl-3 w-full rounded-lg text-sm md:text-base xl:text-lg`}
              />
              <ErrorMessage name="name" />
            </div>

            <div className="w-full text-sm md:text-lg text-amber-500">
              <Field
                placeholder="Email"
                name="email"
                type="email"
                validate={validateEmail}
                className={`${
                  isLight === "true"
                    ? "border border-slate-300"
                    : "bg-zinc-800 text-slate-100 border border-zinc-600"
                } outline-none py-2 md:py-[0.6rem] pl-3 w-full rounded-lg text-sm md:text-base xl:text-lg`}
              />
              <ErrorMessage name="email" />
            </div>

            <div className="w-full text-sm md:text-lg text-amber-500">
              <Field
                placeholder="Subject"
                name="subject"
                validate={validateName_Subject}
                className={`${
                  isLight === "true"
                    ? "border border-slate-300"
                    : "bg-zinc-800 text-slate-100 border border-zinc-600"
                } outline-none py-2 md:py-[0.6rem] pl-3 w-full rounded-lg text-sm md:text-base xl:text-lg`}
              />
              <ErrorMessage name="subject" />
            </div>

            <div className="w-full text-sm md:text-lg text-amber-500">
              <Field
                placeholder="Message"
                as="textarea"
                name="message"
                validate={validateMessage}
                className={`${
                  isLight === "true"
                    ? "border border-slate-300"
                    : "bg-zinc-800 text-slate-100 border border-zinc-600"
                } outline-none py-2 md:py-[1rem] pl-3 w-full rounded-lg text-sm md:text-base xl:text-lg`}
              />
              <ErrorMessage name="message" />
            </div>

            <button
              type="submit"
              className="self-start py-2 px-6 bg-amber-400 text-white rounded-xl md:text-xl"
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>

      <div
        className={`z-[150] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-100 bg-zinc-700 rounded-3xl transition-opacity flex gap-1 justify-center items-center duration-500
        ${stateForm.show ? null : "translate-x-[99rem] opacity-0"} ${
          stateForm.loading ? "h-12 w-12" : "py-2 px-1"
        }`}
      >
        {stateForm.show ? (
          stateForm.loading ? (
            <ClipLoader
              color={"#ffad1f"}
              loading={stateForm.loading}
              size={35}
            />
          ) : !stateForm.error ? (
            <>
              <MdVerified className="text-amber-400 h-5 w-5" />

              <p className="text-sm">Email send succesfully</p>
            </>
          ) : (
            <>
              <VscError className="text-amber-400 h-5 w-5" />

              <p className="text-sm">One error has ocurred</p>
            </>
          )
        ) : null}
      </div>
    </>
  );
};

export default ContactForm;
