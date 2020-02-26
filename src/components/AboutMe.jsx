import React, { Component } from 'react';
import './AboutMe.css';
import edu from '../images/edu.png';
import skills from '../images/skills.png';


export class AboutMe extends Component {

    
    render() {
        return (
            <div className="container">
                <h1 className="projecth1 font-weight-normal" id="Projects">About me</h1>
                <div className="aboutMeRow row featurette">  
                    <div className="eduPic col-md-4">
                        <img className="deedster d-block w-100" src={edu} alt=""></img>
                    </div>
                    <div className="eduText col-md-8">
                        <h2 className="featurette-heading font-weight-light">Education</h2>
                        <br></br>
                        <h4 className="font-weight-normal">KTH, Royal Institute of Technology | 2017 - June 2020</h4>
                        <p className="lead"> MSE Interactive Media Technology - Focus on User <span className="blue font-weight-bolder">Experience Design and Research</span></p>
                        <br></br>
                        <h4 className="font-weight-normal">KTH, Royal Institute of Technology | 2014 - 2017</h4>
                        <p className="lead">BS Media Technology - <span className="blue font-weight-bolder">Interaction Design</span> track</p>
                    </div>
                </div>
                <h2 className="featurette-heading font-weight-light">Skills</h2>
                <div className="skillsRow row featurette">  
                    <div className="first col-md-4">
                        <h4 className="font-weight-normal">UX methods</h4>
                        <p className="lead">
                            Interviews<br/>
                            Cognitive Walkthrough<br/>
                            Surveys<br/>
                            Contextual inquiry<br/>
                            Competitive analysis<br/>
                            Personas<br/>
                            Scenarios<br/>
                            User stories<br/>
                            Defining requirements<br/>
                            Wireframing<br/>
                            Hi-fi &amp; lo-fi Prototyping<br/>
                            Usability testing<br/>
                            Heuristic evaluation<br/>
                            A/B testing<br/>
                            Multivariate Testing<br/>
                        </p>
                    </div>
                    <div className="skillText col-md-4">
                        <h4 className="font-weight-normal">Development</h4>
                        <p className="lead">
                            HTML<br/>
                            CSS<br/>
                            Javascript<br/>
                            JQuery<br/>
                            React.js<br/>
                            Python
                        </p>
                        <br></br>
                        <h4 className="font-weight-normal">Other</h4>
                        <p className="lead">
                            Persuasive design and communication<br/>
                            Behavior change techniques<br/>
                            Information architecture<br/>
                        </p>
                    </div>
                    <div className="eduPic col-md-3">
                    <img className="skillPic d-block w-100" src={skills} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe
