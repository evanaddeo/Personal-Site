import "./Projects.css";
import SkillTag from "./SkillTag";

// function that displays 3 horizontally listed blocks
// each block contains a title, a short description, and a link to the project
// the blocks also have an image of the project at the top
// the blocks are responsive and will stack on top of each other when the screen is too small
function Projects() {
    return (
        <div id="Projects">
            <div>
                <h1>Projects</h1>
            </div>
            <div className="container">
                <div className="projContainer">
                    <img className="projPics" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="project screenshot" />
                    <h2>DawgByte Fitness</h2>
                    <h5>React Native - JavaScript</h5>
                    <p>I did this, this, this, this, this, this, and this</p>
                    <div className="projSkills">
                        <SkillTag skillName="React Native" url="https://reactnative.dev/" />
                        <SkillTag skillName="JavaScript" url="https://www.javascript.com/" />
                        <SkillTag skillName="Node.js" url="https://nodejs.org/en/" />
                        <SkillTag skillName="Express" url="https://expressjs.com/" />
                        <SkillTag skillName="Mongo" url="https://www.mongodb.com/" />
                        <SkillTag skillName="Mongoose" url="https://mongoosejs.com/" />
                    </div>
                </div>
                <div className="projContainer">
                    <img className="projPics" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="project screenshot" />
                    <h2>iTunes Clone</h2>
                    <h5>Java - JavaFX</h5>
                    <p>I did this, this, this, this, this, this, and this</p>
                    <div className="projSkills">
                        <SkillTag skillName="React Native" url="https://reactnative.dev/" />
                        <SkillTag skillName="JavaScript" url="https://www.javascript.com/" />
                        <SkillTag skillName="Node.js" url="https://nodejs.org/en/" />
                        <SkillTag skillName="Express" url="https://expressjs.com/" />
                        <SkillTag skillName="Mongo" url="https://www.mongodb.com/" />
                        <SkillTag skillName="Mongoose" url="https://mongoosejs.com/" />
                    </div>
                </div>
                <div className="projContainer">
                    <img className="projPics" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="project screenshot" />
                    <h2>All About Evan</h2>
                    <h5>React - JavaScript</h5>
                    <p>I did this, this, this, this, this, this, and this</p>
                    <div className="projSkills">
                        <SkillTag skillName="React Native" url="https://reactnative.dev/" />
                        <SkillTag skillName="JavaScript" url="https://www.javascript.com/" />
                        <SkillTag skillName="Node.js" url="https://nodejs.org/en/" />
                        <SkillTag skillName="Express" url="https://expressjs.com/" />
                        <SkillTag skillName="Mongo" url="https://www.mongodb.com/" />
                        <SkillTag skillName="Mongoose" url="https://mongoosejs.com/" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projects;