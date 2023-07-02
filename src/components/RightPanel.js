import React, { useEffect, useRef } from 'react';
import "./RightPanel.css";
import Intro from "./Intro.js";
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

function RightPanel() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const playAnimation = () => {
      element.style.animationPlayState = 'running'; // Start the animation
      setTimeout(() => {
        element.style.animationPlayState = 'paused'; // Pause the animation after 2 seconds
        setTimeout(playAnimation, 10000); // Delay for 10 seconds before restarting the animation
      }, 2000);
    };

    playAnimation();
  }, []);

  return (
    <div ref={elementRef} id="RightPanel">
      <Intro/>
      <Experience/>
      <Projects/>
      <Skills/>
      <About/>
    </div>
  );
}

export default RightPanel;