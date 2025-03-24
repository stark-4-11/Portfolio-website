import React, { useEffect } from 'react';
import RotatingText from './RotatingText';
import IntroPage from './intro';
import '@google/model-viewer';

const Page1con = () => {
  useEffect(() => {
    // Get the model-viewer element
    const modelViewer = document.querySelector('model-viewer');

    // Function to handle scroll events
    const handleScroll = () => {
      // Calculate the scroll progress (0 to 1)
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / scrollHeight;

      // Calculate the rotation angle based on scroll progress
      const rotationAngle = 360 * scrollProgress; // Full 360-degree rotation

      // Update the camera-orbit attribute
      modelViewer.setAttribute('camera-orbit', `${rotationAngle}deg 85deg 125%`);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
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
        <span className='font-[estile9] text-5xl text-white'>I am a </span>
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
          rotationInterval={2000}
        />
      </div>

      <div className='absolute top-[-28vh] left-[35vw] h-[60vh] w-[60vw] sm:left-[50vw] sm:top-[10vh] sm:w-[50vw] sm:h-[50vh] md:left-[55vw] md:w-[40vw] md:h-[40vh] md:top-[10vh] lg:left-[48vw] lg:top-[5vh] lg:w-[50vw] lg:h-[50vh] xl:top-[8vh] xl:left-[40vw] xl:w-[80vw] xl:h-[80vh]' style={{ zIndex: 10 }}>
      <model-viewer
    src="/models/robot.glb"
    alt="A 3D Model"
    autoplay
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      transform: "translateY(10px)",
    }}
    camera-orbit="0deg 75deg 105%"
    {...(window.innerWidth < 640
      ? { scale: "5 5 5" } 
            : { scale: "20 20 20" })} 
  ></model-viewer>
      </div>
    </>
  );
};

export default Page1con;