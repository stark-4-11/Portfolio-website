import React from "react";
import RollingGallery from "./RollingGallery";
import CircularGallery from './PosterPhones';
import ProjectList from "./ProjectList";

const ProjectCard = () => {
  return (
    <div className="flex  flex-col md:flex-row items-start">
      {/* Left Side: Posters */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        {/* Title */}
        <div className="text-white text-center md:text-left font-[estile1] text-[40px] sm:text-[50px] md:text-[70px] mt-6 md:ml-[2vw]">
          PhotoShop Posters
        </div>

        {/* Mobile Gallery */}
        <div className="md:hidden w-full h-[600px] relative mt-[-5vh]">
          <CircularGallery bend={0.5} textColor="#ffffff" borderRadius={0.05} />
          
        </div>

        {/* Desktop Gallery */}
        <div className="hidden md:block mt-[-5vh] ml-[-5vw]">
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>

      </div>

      {/* Right Side: Project Folder */}
      <div className="w-full md:w-[35%] px-4 md:px-0 mt-[15vh] md:mt-[44vh] lg:mt-[48vh] flex flex-col items-center md:items-end">
        <ProjectList
          color="#5227FF"
          size={2}
          items={[
            <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
              Project 3
            </a>,
            <div
              contentEditable
              suppressContentEditableWarning
              className="text-black text-sm w-full h-full"
            >
              Project 2
            </div>,
            <a
              href="https://movie-verse-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm"
            >
              <p className="font-[estile7] text-[10px]">Movie-Verse</p>
              <img
                src="/Screenshot110.jpg"
                alt="Movie-Verse"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </a>,
          ]}
        />

        {/* "Click to open Projects" */}
     <span className="mt-16 md:mt-[10vh] md:self-end md:mr-[-5vw] text-white text-xl md:text-2xl font-[estile7] text-center md:text-right">
  Click to open Projects
</span>

      </div>
    </div>
  );
};

export default ProjectCard;
