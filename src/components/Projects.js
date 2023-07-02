import "./Projects.css";

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
            <div>
                <h3>Project 1 Name</h3>
                <h4>Project 1 Description</h4>
                <h4>Project 1 Link</h4>
            </div>
            <div>
                <h3>Project 2 Name</h3>
                <h4>Project 2 Description</h4>
                <h4>Project 2 Link</h4>
            </div>
            <div>

                <h3>Project 3 Name</h3>
                <h4>Project 3 Description</h4>
                <h4>Project 3 Link</h4>
            </div>
        </div>
    );
}

export default Projects;