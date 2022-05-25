import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 pt-16">
            Let's build something together
          </p>
          <h1 className="py-4 sm:text-3xl sm:py-2">
            Hi, I'm <span className="text-[#353199]">Natalya</span>
          </h1>
          <h2 className="py-2 sm:text-3xl sm:py-1">A Front-End Web Developer</h2>
          <p className="py-4 max-w-[70%] m-auto sm:py-2">
            A passionate and self-motivated Junior Front-End Web Developer
            having an experience of building Websites with HTML, CSS and
            JavaScript. Currently I'am focused on studying React, Redux Toolkit
            and Firebase.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 sm:py-2">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/natalya-bortsova-156b6113b/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/NatalyaBortsova" target="_blank">
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
  );
};

export default Main;
