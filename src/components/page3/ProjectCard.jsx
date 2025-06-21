import React from "react";
import RollingGallery from "./RollingGallery";
import CircularGallery from './PosterPhones'
import ProjectList from "./ProjectList"




const ProjectCard = () => {
  return (
    <>
      <div className="sm:flex">
        {/* Stack Component */}

    

<div className="md:hidden" style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={0.5} textColor="#ffffff" borderRadius={0.05} />
</div>

<div className="flex space-x-10">
        {/* RollingGallery Component */}
       <div className="hidden md:block ml-[-5vw]">
  <div className="text-white md:ml-[2vw] ml-0 text-center font-[estile1] text-[70px]">
    PhotoShop Posters
  </div>
  <div className="mt-[-10vh]">
  <RollingGallery autoplay={true} pauseOnHover={true} /></div>
</div>


        {/* Project List */}


        <div className="mt-[18vh] ml-[30vw]  sm:mt-[40vh] sm:ml-[15vw]">
          <span className="text-white text-8xl md:ml-[2vw] font-[estile1]">Click to open</span>
        <ProjectList
         color="#5227FF"
        size={2}
        items={[
          <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
            {/* <img
              src=""
              alt=""
              className="w-full h-full object-cover rounded-[10px]"
            /> */}
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
              src="/src/assets/Posters/Screenshot (184).png"
              alt=""
              className="w-full h-full object-cover rounded-[10px]"
            />
          </a>,
        ]}
        />
        </div>
       
        </div>


      </div>
    </>
  );
};

export default ProjectCard;
