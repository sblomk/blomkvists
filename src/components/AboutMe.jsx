import React, { Component } from 'react';
import './AboutMe.css';
import edu from '../images/edu.png';


export class AboutMe extends Component {

    
    render() {
        return (
            <div className="container">
                <h1 className="projecth1 font-weight-normal">About me</h1>
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
            </div>
        )
    }
}

export default AboutMe
