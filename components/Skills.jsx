import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16">
        <h2 className="uppercase tracking-widest text-[#353199] mb-4">Sills</h2>
        <h3 className="mb-4 text text-3xl sm:text-4xl">What I can do</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/html.png"
                  alt="html"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="uppercase text-2xl">Html</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/css.png"
                  alt="css"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="uppercase text-2xl">Css</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/scss.png"
                  alt="scss"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="uppercase text-2xl">scss</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/javascript.png"
                  alt="javascript"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="text-2xl">Javascript</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/react.png"
                  alt="react"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="text-2xl">React</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/firebase.png"
                  alt="firebase"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="text-2xl">Firebase</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/tailwind.png"
                  alt="tailwind"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="text-2xl">Tailwind</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mb-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/github1.png"
                  alt="github"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="text-2xl">Github</h4>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto sm:m-0">
                <Image
                  src="/assets/skills/gulp.png"
                  alt="gulp"
                  width={55}
                  height={55}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h4 className="text-2xl">Gulp</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
