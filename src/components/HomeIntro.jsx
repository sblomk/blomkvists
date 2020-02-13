import React, { Component } from 'react';
import './HomeIntro.css';
import meBook from '../images/jagBok.jpg';
import meBookFirst from '../images/jagBokFirst.jpg'

export class HomeIntro extends Component {

    
    render() {
        return (
            <div className="intro">
            <div className="container">
                <div className="row featurette" style={{marginBottom: '40px'}}>  
                    <div className="col-md-5 order-md-1">
                        <a href="#about">
                        <img src={meBookFirst} alt="Sebastian" className="introImg d-block w-100" 
                            onMouseOver = {e => (e.currentTarget.src = meBook)} 
                            onMouseOut = {e => (e.currentTarget.src = meBookFirst)}
                        />
                        </a>
                    </div>
                    <div className="introText col-md-7 order-md-2">
                        <h2 className="featurette-heading">Hello, I'm Sebastian. <span className="niceText">Nice to see you!</span></h2>
                        <p className="lead"> My name is Sebastian Blomkvist and I'm currently studying the <span className="font-weight-bolder bg-light">Interactive Media Technology </span>  
                        masters programme at KTH with a focus on <span className="font-weight-bolder bg-light"> Human-Computer Interaction</span>. 
                        Areas that I find interesting is UX design, persuasive design, sustainable HCI, and digital transformation management. 
                        <span className="text-muted font-weight-bolder"> Scroll down to find out more!</span></p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default HomeIntro
