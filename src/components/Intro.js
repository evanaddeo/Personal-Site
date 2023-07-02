import "./Intro.css";

function Intro() {

    return (
        <div className="intro">
            <div className="intro__content">
                <h1 className="intro__title">Hello, I'm <span className="introName">Evan</span>.</h1>
                <h3 id="headerTag">I am a <span className="highlight">Software Engineer</span> with <span className="highlight">Full-Stack</span> experience</h3>
                <p className="intro__description">I've gained experience over the last few years by building applications for some pretty awesome companies. <br></br>
                        When I'm not building software, you can find me getting sunburnt out on a disc golf course or having overly<br></br>
                        optimistic fantasies about the Cleveland Browns' upcoming season. Let's connect!</p>
                <button className="intro__button">Contact Me</button>
            </div>
        </div>
    );
}

export default Intro;