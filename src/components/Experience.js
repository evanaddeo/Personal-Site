import "./Experience.css";
import ADPLogo from "../images/ADPLogo.png";
import VILogo from "../images/VILogo.png";
import ACMLogo from "../images/ACMLogo.jpg";

// function that displays 3 rows, each representing a different job, including the company name, job title, and dates worked
function Experience() {
    return (
        <div id="Experience">
            <div>
                <h1>Work Experience</h1>
            </div>
            <div className="job">
                <img className="companyLogo" src={ ADPLogo } alt="pic" />
                <div className="jobInfo">
                    <div className="jobHeader">
                        <div className="titles">
                            <h2>ADP</h2>
                            <h3>Application Developer Intern</h3>
                        </div>
                        <div className="dates">
                            <h4>Atlanta, GA</h4>
                            <h4>2023 (Present)</h4>
                        </div>
                    </div>
                    <p>information</p>
                </div>  
            </div>
            <div className="job">
                <img className="companyLogo" src={ VILogo } alt="pic" />
                <div className="jobInfo">
                    <div className="jobHeader">
                        <div className="titles">
                            <h2>Vanderlande</h2>
                            <h3>Software Development Intern</h3>
                        </div>
                        <div className="dates">
                            <h4>Atlanta, GA</h4>
                            <h4>2022</h4>
                        </div>
                    </div>
                    <p>information</p>
                </div>  
            </div>
            <div className="job">
                <img className="companyLogo" src={ ACMLogo } alt="pic" />
                <div className="jobInfo">
                    <div className="jobHeader">
                        <div className="titles">
                            <h2>ACM (Association for Computing Machinery)</h2>
                            <h3>Secretary</h3>
                        </div>
                        <div className="dates">
                            <h4>Athens, GA</h4>
                            <h4>2023 (Present)</h4>
                        </div>
                    </div>
                    <p>information</p>
                </div>  
            </div>
        </div>
    );
}

export default Experience;