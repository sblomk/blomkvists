import React, { Component } from 'react';
import './AboutMe.css';
import deedster from '../images/deedster.png';


export class CurrentWork extends Component {

    
    render() {
        return (
            <div className="container">
                <h1 className="projecth1 font-weight-normal">Current Project</h1>
                <div className="aboutMeRow row featurette">  
                    <div className="deedsterText col-md-7">
                        <h2 className="featurette-heading font-weight-light">Currently doing my Master Thesis at Deedster!</h2>
                        <p className="lead"> I'm working on how to increase user engagement with push notifications.<span className="blue font-weight-bolder"> My mission is to design 
                        push-strategies to enhance the User Experience to persuade and motivate increased engagement with the Deedster app</span>. 
                        I will be conducting multivariate testing and an engagement analysis from user behavioral data 
                        to determine the optimal strategy for their application.</p>
                    </div>
                    <div className="col-md-5">
                    <img className="deedster d-block w-100" src={deedster} alt=""></img>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default CurrentWork