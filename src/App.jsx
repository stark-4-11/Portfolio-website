import React from 'react';
import Particles from './components/Particles';
import Page2con from './components/page2/page2con'
import TrueFocus from './components/page2/AboutMe';
import ProjectCard from './components/page3/ProjectCard'
import FadeContent from './components/page4/SkillsTxt'
import SkillCircle from './components/page4/SkillCircle'
import "@google/model-viewer";
import backgroundImage from './assets/bggg.gif'
import ContactForm from './components/Contact/ContactForm'
import Footer from "./components/Contact/Footer"

const App = () => {
  return (
    <>
    
<div className="main leading-none flex flex-col items-center gap-0" style={{ overflow: 'hidden' }}>
  {/* First Box */}
  <section id='Home'>
  <div className='flex justify-center items-center w-[97vw] mt-3 h-[750px] sm:h-[525px] relative bg-black rounded-[30px] shadow-[0_0_20px_hsl(5,5%,5%)]
'>
    <Particles
      particleColors={['#ffffff', '#ffffff']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

</section>
{/*About me text*/}

<div className='BigAboutMe font-[estile1] '>
<TrueFocus 
sentence="ABOUT ME"
manualMode={false}
blurAmount={10}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
</div>

  {/* Second Box */}
  <section id='About'> 
  <div 
    className="flex justify-center items-center mb-5 w-[97vw] mt-3 m h-[800px] sm:h-[525px] bg-black rounded-[30px]">
    <div className="w-full h-full relative rounded-[30px] shadow-[0_0_20px_hsl(5,5%,5%)]">
      <Page2con />
    </div>
  </div>
  </section>

  <div className='font-[estile1] text-[10rem] mt-10 mb-10 sm:text-[20rem] sm:mt-0 sm:mb-40 lg:mb-0 md:text-[20rem] lg:text-[30rem]'>
  <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
   PROJECTS
  </FadeContent>
  </div>

  <div id='ProjectCard'
    className="flex justify-center items-center mb-5 w-[97vw] mt-3  h-[1400px] sm:h-[525px] bg-black rounded-[30px]">
    <div className="relative rounded-[30px]">
      <ProjectCard />
    </div>
  </div>

  <div className='font-[estile1] text-[15rem] mt-10 mb-10 sm:text-[30rem] sm:mt-0 sm:mb-0'>
  <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    SKILLS
  </FadeContent>
  </div>


  <div id='Skills' className="flex  justify-center items-center mb-5 w-[97vw] mt-3 h-[800px]  sm:h-[525px] bg-black rounded-[30px] relative overflow-hidden">
  {/* Background GIF */}
  <img
    src={backgroundImage}
    alt="GIF Background"
    className="absolute w-[100vw]  h-[50vh] mt-[-340px] sm:mt-[-140px] lg:h-[100vh] lg:w-[60vw] xl:w-[60vw] xl:mt-[-100px] right-1 xl:h-[110vh] object-cover"
  />
  <span className='text-white text-[6rem] absolute font-[estile1] lg:mr-50'>SKILLS</span>

  {/* Content (SkillCircle) */}
  <div className="relative rounded-[30px] mt-90 sm:mt-40 sm:left-[-180px] lg:mt-10 lg:left-[-300px] xl:mr-50 xl:mt-10">
    <SkillCircle />
  </div>
</div>



<div className='font-[estile1] text-[12rem] mt-10 mb-10 sm:text-[20rem] sm:mt-0 sm:mb-0 md:text-[20rem] lg:text-[30rem]'>
  <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
   CONTACT
  </FadeContent>
  </div>



  <div id='Contact'
    className="flex justify-center items-center mb-5 border-4 w-full mt-3  h-[1000px] sm:h-[525px] bg-black ">
    <div className="border-8 text-white h-[950px] w-[96vw] sm:h-[480px] lg:h-[500px] rounded-4xl ">
      <div className='ml-[3vw] mt-[12vh] sm:mt-[6vh]'><ContactForm /></div>
     
    </div>
  </div>
</div>



<div className="flex justify-center items-center w-full mt-10  h-[100px] sm:h-[100px] bg-black ">   
      <div><Footer/></div>
    </div>



    </>
  );
};

export default App;
