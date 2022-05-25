import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CryptoApp from "../public/assets/projects/coinApp.png";
import { RiRadioButtonFill } from "react-icons/ri";

const cryptoApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={CryptoApp}
          alt="Crypto App"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="mb-2">Crypto App</h2>
          <h3> React| Javascript | CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="uppercase tracking-widest text-[#353199] mb-4">
            Project
          </h2>
          <h3 className="mb-4 text text-3xl sm:text-4xl">Overview</h3>
          <p>
            This Website was built by using HTML, SCSS, Javascipt. Users could
            receive actual information about crypto market. This is made
            possible with Coingecko API.
          </p>
          <a
            data-set="goto-progect"
            href="https://natalyabortsova.github.io/crypto-app/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-2 mt-4 mr-8"
          >
            Demo
          </a>
          <a
            data-set="goto-progect"
            href="https://github.com/NatalyaBortsova/crypto-app"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-2 mt-4 mb-4"
          >
            Code
          </a>
          <div>
            <Link href="/#projects">
              <span className="underline text-bold cursor-pointer">Back</span>
            </Link>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <h4 className="text-center font-bold mb-4">Technologies</h4>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              <span className="flex items-center py-2">
                <RiRadioButtonFill className="mr-1" />
                React
              </span>
              <span className="flex items-center py-2">
                <RiRadioButtonFill className="mr-1" />
                Javascript
              </span>
              <span className="flex items-center py-2">
                <RiRadioButtonFill className="mr-1" />
                Coingecko API
              </span>
              <span className="flex items-center py-2">
                <RiRadioButtonFill className="mr-1" />
                CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cryptoApp;
