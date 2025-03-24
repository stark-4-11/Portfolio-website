import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedText() {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // Triggers 100px from bottom

  useEffect(() => {
    if (isInView) {
      // Start animation when in view
      controls.start({
        scaleY: 1,
        translateY: 0,
        rotateX: 0,
        opacity: 1,
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.8, // 1.2-second duration
        },
      });
    } else {
      // Reset to initial state when out of view
      controls.start({
        scaleY: 0.05,
        translateY: 0, // No vertical offset needed for center pivot
        rotateX: -90,
        opacity: 0.5,
      });
    }
  }, [isInView, controls]);

  return (
    <div ref={ref}
      style={{
        height: "100bedrijf",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1000px",
      }}
    >
      <motion.h1
        initial={{
          scaleY: 0.05, // Starts thin
          translateY: 0, // No initial offset for center unfolding
          rotateX: -90, // Starts flat
          opacity: 0.5, // Starts slightly faded
        }}
        animate={controls}
        style={{
          fontSize: "30rem",
          transformOrigin: "center", // Pivot from center
        }}
      >
        <div className="w-90 lg:w-120 xl:w-140 font-[estile1] text-[135px] md:text-[55px]  xl:text-[73px] text-white lg:text-[80px] sm:mt-2 md:mt-11 leading-none sm:w-150 sm:text-[70px] sm:font-[estile8]">
  Hello, <br /> I'm Lakshay!
</div>

      </motion.h1>
    </div>
  );
}

function App() {
  return (
    <div className="font-[estile1]">
      <AnimatedText />
    </div>
  );
}

export default App;