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
            <div>
                <h3>Front End</h3>
                <SkillTag skillName="HTML"/>
                <SkillTag skillName="CSS"/>
                <SkillTag skillName="JavaScript"/>
                <SkillTag skillName="React"/>
                <SkillTag skillName="Bootstrap"/>
                <SkillTag skillName="Material UI"/>
            </div>
            <div>
                <h3>Back End</h3>
                <SkillTag skillName="Node.js"/>
                <SkillTag skillName="Express"/>
                <SkillTag skillName="MongoDB"/>
                <SkillTag skillName="Mongoose"/>
                <SkillTag skillName="MySQL"/>
                <SkillTag skillName="Sequelize"/>
            </div>
            <div>
                <h3>Other</h3>
                <SkillTag skillName="Git"/>
                <SkillTag skillName="GitHub"/>
                <SkillTag skillName="Heroku"/>
                <SkillTag skillName="Jest"/>
                <SkillTag skillName="JQuery"/>
                <SkillTag skillName="Handlebars"/>
            </div>
        </div>
    );
}

export default Skills;
