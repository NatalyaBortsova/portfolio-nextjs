import React, { useState } from "react";
import Level from "../public/assets/projects/level-fitness.png";
import AddPhoto from "../public/assets/projects/addphoto.png";
import Elone from "../public/assets/projects/eloneAgency.png";
import Galeoncar from "../public/assets/projects/galeoncar.png";
import TravelApp from "../public/assets/projects/travelApp.png";
import TokarMebel from "../public/assets/projects/tokarMebel.png";
import WeatherApp from "../public/assets/projects/weatherApp.png";
import CryptoApp from "../public/assets/projects/coinApp.png";

import ProjectItem from "./ProjectItem";



const Projects = () => {
  const [loadMore, setLoadMore] = useState(false);

  const loadMoreProjectsBtn = () => {
    setLoadMore(!loadMore);
  };

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <h2 className="uppercase tracking-widest text-[#353199] mb-6">
          Projects
        </h2>
        <h3 className="mb-4 text text-3xl sm:text-4xl">What I&apos;ve Built</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-4">
          <ProjectItem
            title="Level Fitness"
            subtitle="HTML, SCSS, Javascript, iQuery"
            backgroundImg={Level}
            projectUrl="/levelFitness"
          />
          <ProjectItem
            title="AddPhoto"
            subtitle="HTML, SCSS, Javascript"
            backgroundImg={AddPhoto}
            projectUrl="/addphoto"
          />
          <ProjectItem
            title="Elone Agency"
            subtitle="HTML, SCSS, Javascript"
            backgroundImg={Elone}
            projectUrl="/eloneAgency"
          />
          <ProjectItem
            title="Galeoncar"
            subtitle="HTML, SCSS, Javascript"
            backgroundImg={Galeoncar}
            projectUrl="/galeoncar"
          />
          {loadMore ? (
             <>
             <ProjectItem
               title="Tokar Mebel"
               subtitle="HTML, SCSS, Javascript"
               backgroundImg={TokarMebel}
               projectUrl="/tokarMebel"
             />
              <ProjectItem
                title="Travel App"
                subtitle="React, Javascript, CSS"
                backgroundImg={TravelApp}
                projectUrl="/travelApp"
              />
              <ProjectItem
                title="Weather App"
                subtitle="React, Javascript, CSS"
                backgroundImg={WeatherApp}
                projectUrl="/weatherApp"
              />
              <ProjectItem
                title="Crypto App"
                subtitle="React, Javascript, CSS"
                backgroundImg={CryptoApp}
                projectUrl="/cryptoApp"
              />
            
            </>
          ) : null}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#2c24b6] to-[#2d0774] text-white p-3"
            onClick={loadMoreProjectsBtn}
          >
            {loadMore ? "Less more" : "Load more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
