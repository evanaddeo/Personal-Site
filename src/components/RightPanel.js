import React, { useEffect, useRef } from 'react';
import "./RightPanel.css";

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
      <div>
        <h1>Hello, I'm Evan</h1>
      </div>
      <div>
        <h1>Work Experience</h1>
      </div>
      <div>
        <h1>Projects</h1>
      </div>
      <div>
        <h1>Skills</h1>
      </div>
      <div>
        <h1>About Me</h1>
      </div>
    </div>
  );
}

export default RightPanel;