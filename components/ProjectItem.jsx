import React from "react";
import Image from "next/image";
import Link from "next/link";

const prefix = "/portfolio-nextjs";

const ProjectItem = ({title, backgroundImg, projectUrl, subtitle}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group cursor-pointer hover:bg-gradient-to-r from-[#5651e5] to-[#aa82b3]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={prefix + backgroundImg}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
        <h4 className="text-2xl tracking-wider mb-2">{title}</h4>
        <h5 className="mb-4">{subtitle}</h5>
        <Link href={projectUrl}>
          <span className="p-3 rounded-lg bg-white text-[#131920] font-bold text-lg cursor-pointer">
            More Info
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
