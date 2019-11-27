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
                <div className="col-md-7 order-md-2">
                    <div style={{height: '50px'}}></div>
                    <h2 className="featurette-heading">Hello, I'm Sebastian. <span className="text-muted">Welcome to my site.</span></h2>
                    <p className="lead">I'm currently studying the Interactive Media Technology masters programme at KTH with a focus on Human Computer Interaction. 
                    Areas that I find interesting is UX and interaction design, sustainable HCI, web development, and digital transformation management. 
                    <span className="text-muted font-weight-bolder"> Explore the site to find out more!</span></p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src={meBookFirst} alt="" className="d-block w-100" 
                        onMouseOver = {e => (e.currentTarget.src = meBook)} 
                        onMouseOut = {e => (e.currentTarget.src = meBookFirst)}
                    />
                </div>
                </div>
                <hr/>
            </div>
            </div>
        )
    }
}

export default HomeIntro
