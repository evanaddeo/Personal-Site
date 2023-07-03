import "./Skills.css";
import SkillTag from "./SkillTag";

// function the displays 3 vertically stacked elements
// each element has a small image and a title
// underneath each title is a list of <Skilltag /> components 
function Skills() {
    return (
        <div id="Skills">
            <div>
                <h1>Skills</h1>
            </div>
            <div className="skillType">
            <img className="typePics" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="project screenshot" />
                <div className="content">
                    <h2>Use for work</h2>
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

            <div className="skillType">
            <img className="typePics" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="project screenshot" />
                <div className="content">
                    <h2>Use for school</h2>
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

            <div className="skillType">
            <img className="typePics" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="project screenshot" />
                <div className="content">
                    <h2>Use for fun</h2>
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

export default Skills;
