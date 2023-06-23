import { motion } from 'framer-motion';
import LILogo from "../images/LI.png";
import Github from "../images/github.png";
import "./ProfileLinks.css";

const ProfileLinks = () => {
    const handleLI = () => {
      window.open('https://www.linkedin.com/in/evanaddeo/', '_blank');
    };

    const handleGH = () => {
        window.open('https://github.com/evanaddeo', '_blank');
    };
  
    const imageVariants = {
        initial: {
          scale: 1,
          opacity: 1,
        },
        hovered: {
          scale: 1.2,
          opacity: 0.8,
        },
      };
    
      return (
        <div id="container">
            <span class="line" style={{marginRight: "5%"}}>
                <hr style={{color: "rgb(10, 83, 201)"}}></hr>
            </span>
            <motion.div
                initial="initial"
                whileHover="hovered"
                variants={imageVariants}
            >
            <img
                onClick={handleLI}
                id = "ProfileLinks"
                src={LILogo}
                alt="LinkedIn"
            />
            </motion.div>
            <motion.div
                initial="initial"
                whileHover="hovered"
                variants={imageVariants}
            >
            <img
                onClick={handleGH}
                id = "GHLink"
                src={Github}
                alt="GitHub"
            />
            </motion.div>
            <span class="line" style={{marginLeft: "5%"}}>
                <hr style={{color: "rgb(10, 83, 201)"}}></hr>
            </span>
        </div>
      );
  };

  export default ProfileLinks;

