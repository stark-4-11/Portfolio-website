import React from 'react';
import { FaReact, FaWordpress, FaFigma, FaHtml5, FaCss3Alt, FaShopify } from 'react-icons/fa'; // React, WordPress, Figma, HTML, CSS, Shopify icons
import { SiTailwindcss, SiMongodb, SiJavascript, SiAdobephotoshop } from 'react-icons/si'; // Tailwind, MongoDB, JavaScript, Photoshop icons
import Image1 from '../../assets/man-icon.jpg'; // Central image

const SkillCircle = () => {
  return (
    <div className=''>
      <div className="relative h-full w-full flex items-center justify-center ">
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
          {/* Circle 1 - React */}
          <div className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <FaReact className="w-6 h-6 text-blue-500" /> {/* React icon */}
            </div>
          </div>

          {/* Circle 2 - Tailwind */}
          <div className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <SiTailwindcss className="w-6 h-6 text-cyan-500" /> {/* Tailwind icon */}
            </div>
          </div>

          {/* Circle 3 - MongoDB */}
          <div className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <SiMongodb className="w-6 h-6 text-green-500" /> {/* MongoDB icon */}
            </div>
          </div>

          {/* Circle 4 - JavaScript */}
          <div className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <SiJavascript className="w-6 h-6 text-yellow-500" /> {/* JavaScript icon */}
            </div>
          </div>

          {/* Circle 5 - WordPress */}
          <div className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <FaWordpress className="w-6 h-6 text-blue-700" /> {/* WordPress icon */}
            </div>
          </div>

          {/* Circle 6 - Figma */}
          <div className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <FaFigma className="w-6 h-6 text-pink-500" /> {/* Figma icon */}
            </div>
          </div>

          {/* Circle 7 - Photoshop */}
          <div className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <SiAdobephotoshop className="w-6 h-6 text-blue-800" /> {/* Photoshop icon */}
            </div>
          </div>

          {/* Circle 8 - HTML */}
          <div className="profile_item left-[10%] top-[40%] absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <FaHtml5 className="w-6 h-6 text-orange-500" /> {/* HTML icon */}
            </div>
          </div>

          {/* Circle 9 - CSS */}
          <div className="profile_item right-[10%] top-[40%] absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <FaCss3Alt className="w-6 h-6 text-blue-500" /> {/* CSS icon */}
            </div>
          </div>

          {/* Circle 10 - Shopify */}
          <div className="profile_item left-[40%] bottom-[10%] absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 p-[2px] hover:scale-105 transition-all duration-300">
            <div className=" w-[40px] h-[40px] transition-all duration-300 rounded-full z-[2] bg-white p-1 flex items-center justify-center">
              <FaShopify className="w-6 h-6 text-green-600" /> {/* Shopify icon */}
            </div>
          </div>

          {/* Central Circle */}
          <div className="profile_item w-[200px] h-[200px] p-1 border-2 border-gray-400/50 rounded-full cursor-pointer  transition-all duration-300 z-0">
            <div className="w-full bg-white h-full flex items-center justify-center p-10 rounded-full object-cover transition-all duration-300">
              <div className="w-80 h-40 inline-block">
                <img src={Image1} alt="Central Skill" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCircle;