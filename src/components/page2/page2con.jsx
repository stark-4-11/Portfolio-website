import React from 'react';
import DecryptedText from './DecryptedText';
import MyImageTwo from "./download (1) copy.png"
import FuzzyText from "./FuzzyText"

const Page2con = () => {
  const hoverIntensity = 0.5;  // Example value
const enableHover = true;

  return (
    <>
      {/* Main Content */}
      <div className='themain w-115  justify-center items-center px-10 mt-[30px]'>
        {/* Image Container */}
        <div className='container ml-[-40px] rounded-2xl w-[97vw] sm:mt-[-30px] sm:w-[50vw]  sm:h-[40vh] md:h-5  md:w-96.5 md:mt-0 '>
          <img src={MyImageTwo} alt="Description" className=" mt-[-20px]  " />
        </div>

        {/* Decrypted Text on the Right */}
        <div className='textmain grid justify-center items-center ml-[-25px] mt-[-120px] sm:mt-[-150px] rounded-3xl w-[90vw] md:mt-27 md:ml-[130px] xl:ml-[200px] lg:ml-[150px] space-y-5'>
        <span
  className="flex font-[estile1] ml-[-50px] sm:justify-end ">
<FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={hoverIntensity} 
  enableHover={enableHover}
>
  About
</FuzzyText>
</span>

 

        <div className='text-white font-[estile7] opacity-80 text-[1rem] max-h-[30vh] overflow-hidden w-[80vw] sm:w-145 sm:text-[20px] md:mt-20 md:w-[60vw] lg:w-[60vw] xl:w-[60vw]'>
        <DecryptedText 
    text={`I'm a 20-year-old web developer passionate about crafting innovative and user-friendly digital experiences. I thrive on solving complex problems and turning ideas into visually stunning, functional solutions. Beyond coding, I'm a dedicated cinema enthusiast who loves analyzing films, storytelling, and sharing insights as a film critic. Creativity drives everything I do—let’s build something amazing together!`}
    animateOn="view" 
    revealDirection="start" 
/> </div>
</div>



      </div>
    </>
  );
};

export default Page2con;