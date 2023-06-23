import "./LeftPanel.css"
import SkillTag from './SkillTag';
import * as React from "react";
import avatarImage from '../images/avatar1.jpg';
import { motion } from 'framer-motion';
import ProfileLinks from './ProfileLinks';
import LILogo from "../images/LI.png";

function LeftPanel() {
  return (
    <div id="LeftPanel">
      <img id ="profilePic" src={avatarImage} alt="avatar"/>
      <h1 id="name">Evan Addeo</h1>
      <h3 id="occupation">Software Engineer</h3>

      <div id="education" style={{marginRight: "5px"}}>
        <img id ="logo" src={avatarImage} alt="avatar"/>
        <span id="school"> The University of Georgia</span>
      </div>
      <div id="education">
        <img id ="logo" src={avatarImage} alt="avatar"/>
        <span id="school">Morehead Honors College</span>
      </div>

      <ProfileLinks url='https://www.linkedin.com/in/evanaddeo/' img={LILogo}/>
      
    </div>
  );
}

export default LeftPanel;
