import React from "react";
import { useForm } from "react-hook-form";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  const { register, formState, handleSubmit } = useForm();

  const name = {
    required: { value: true, message: "Name is required" },
    minLength: { value: 3, message: "The name is too short" },
    maxLength: { value: 15, message: "The name is too long" },
  };

  const phone = {
    required: { value: true, message: "Phone is required" },
    pattern: {
      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      message: "Phone must be valid"
    },
    minLength: { value: 10, message: "The phone is too short" },
    maxLength: { value: 13, message: "The phone is too long" },
  };

  const email = {
    required: { value: true, message: "Email is required" },
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Email must be valid"
    }
  };

  const message = {
    required: { value: true, message: "Message is required" },
    maxLength: { value: 500, message: "The message is too long" },
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 pt-20 pb-12 w-full">
        <h2 className="uppercase tracking-widest text-[#353199] mb-4">
          Contact
        </h2>
        <h3 className="mb-4 text text-3xl sm:text-4xl">Get In Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact/contact.jpg"
                  alt="send a letter"
                />
              </div>
              <div className="mb-8">
                <h4 className="py-2 text-3xl sm:text-4xl text-[#353199]">
                  Natalya Bortsova
                </h4>
                <h5 className="mb-2">Front-End Developer</h5>
                <p>
                  I am available for frelance or full-time position. Contact me
                  and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase mb-4">connect with me</p>
                <div className="flex items-center justify-between">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/natalya-bortsova-156b6113b/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      href="https://github.com/NatalyaBortsova"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="mailto:natanatka31@gmail.com" target="_blank">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="tel:380995670708">
                      <BsFillPersonLinesFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                })}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      {...register("name", name)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                    <div>
                      <span className="text-sm text-[#ff2400]">
                        {formState.errors.name?.message}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      name="phone"
                      id="phone"
                      {...register("phone", phone)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="number"
                    />
                    <div>
                      <span className="text-sm text-[#ff2400]">
                        {formState.errors.phone?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    {...register("email", email)}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                  <div>
                    <span className="text-sm text-[#ff2400]">
                      {formState.errors.email?.message}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    name="subject"
                    id="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2 mb-8">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    {...register("message", message)}
                    className="border-2 rounded-lg p-3 flex border-gray-300 resize-none"
                    rows="10"
                    type="text"
                  ></textarea>
                  <div>
                    <span className="text-sm text-[#ff2400]">
                      {formState.errors.message?.message}
                    </span>
                  </div>
                </div>
                <button className="w-full p-4" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#353199]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
