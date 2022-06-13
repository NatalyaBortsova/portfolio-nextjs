import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center py-16">
      <div className="max-w-[1240px] m-auto lg:flex gap-8 items-center pt-12">
        <div className="flex-grow flex-shrink flex-auto">
          <h2 className="uppercase tracking-widest text-[#353199] mb-4">
            About
          </h2>
          <h3 className="mb-4 text text-3xl sm:text-4xl">Who I am</h3>
          <p className="mb-4">I am not your normal developer</p>
          <p className="mb-4">
            I have spent the last 15 years in sales, working as a sales manager
            or call-center operator. I have always had a knack for technology
            and working with computers. In the end of 2021 I have seen video of
            some blogger who was developing simple landing page in his stream. I
            have done almost all his tutorials and made some websites. I loved
            the process of building such an amazing works and so then I have
            completed the course of MarkUp Developing. By making my portfolio I
            understand that my love to programming is growing up.
          </p>
          <p className="mb-4">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am now spending my time
            building projects with React JS and learning new
            technologies.
          </p>
          <Link href="/#projects">
            <p className="underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="hidden w-full h-fit shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-out duration-300 flex-shrink-0 flex-grow-0 basis-[400px] lg:flex">
          <Image
            className="rounded-xl"
            src="/assets/about/about.jpg"
            alt="about"
            width={350}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
