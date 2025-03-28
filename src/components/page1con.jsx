import RotatingText from './RotatingText';
import IntroPage from './intro';
import React, { useEffect, useRef } from 'react';
import "@google/model-viewer";

const Page1con = () => {

   const modelViewerRef = useRef(null);
  
    useEffect(() => {
      const modelViewer = modelViewerRef.current;
  
      if (!modelViewer) {
        console.error('Model viewer element not found!');
        return;
      }
  
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollHeight = window.innerHeight; // Use viewport height for faster rotation
        const scrollProgress = scrollY / scrollHeight;
  
        // Increase the rotation multiplier and add a smoothing factor
        const rotationAngle = (520 * scrollProgress) % 360; // Continuous rotation
  
        // Update the camera-orbit attribute
        modelViewer.setAttribute('camera-orbit', `${rotationAngle}deg 60deg 125%`);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
      <div>
        <IntroPage />
      </div>

      <div className="w-fit flex absolute z-10">
        <span className='font-[estile9] text-[2rem] text-white'>I am a </span>
        <RotatingText
          texts={['Web Developer', 'UI/UX Designer']}
          mainClassName="px-4 font-[estile7] font-bold left-3 text-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center items-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}/>
      </div>
              {/* 3D Model */}
              <div className='absolute top-[-24vh] left-[45vw] h-[60vh] w-[60vw] sm:left-[65vw] sm:top-[10vh] sm:w-[50vw] sm:h-[50vh] md:left-[65vw] md:w-[40vw] md:h-[40vh] md:top-[10vh] lg:left-[60vw] lg:top-[15vh] lg:w-[50vw] lg:h-[30vh] xl:top-[8vh] xl:left-[55vw] xl:w-[80vw] xl:h-[60vh] ' style={{ zIndex: 10 }}>
                <model-viewer
                  ref={modelViewerRef}
                  src="/models/Robo.glb"
                  alt="A 3D Model"
                  scale="18 18 18"
                  camera-orbit="0deg 60deg 125%" // Adjusted vertical angle
                  autoplay="true"
                  style={{
                    width: "50%",
                    height: "100%",
                    objectFit: "contain",
                    transform: "translateY(10px)",
                  }}
                ></model-viewer>
              </div>
    </>
  );
};

export default Page1con;

