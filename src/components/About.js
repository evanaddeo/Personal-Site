import "./About.css";

// function that displays a paragraph about myself on the left and then a 4x4 grid of photos on the right
function About() {
    return(
        <div id="About">
            <div>
                <h1>About Me</h1>
                <p>
                    I am a senior at the University of Texas at Austin studying Computer Science. I am interested in software engineering, web development, and data science. I am currently looking for a full-time position starting in May 2022.
                </p>
            </div>
            <div>
                <img src="https://i.imgur.com/6XOc1ZJ.png" alt="Jorge" />
            </div>
        </div>
    );
}

export default About;