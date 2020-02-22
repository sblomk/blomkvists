import React, { Component } from 'react';
import './HomeIntro.css';
import meBook from '../images/jagBok.jpg';
import meBookFirst from '../images/jagBokFirst.jpg'
import linkedin from '../images/lin.png'

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
                        <h1 className="featurette-heading font-weight-light">Hello, I'm <span className="font-weight-normal" style={{color: "#1d4382"}}>Sebastian</span>. <span className="niceText">Nice to see you!</span></h1>
                        <p className="lead introlead"> My name is Sebastian Blomkvist and I'm currently studying my last year at the <span className="font-weight-bolder" style={{color: "#1d4382"}}>Interactive Media Technology </span>  
                        masters programme at <span className="font-weight-bolder" style={{color: "#1d4382"}}>KTH</span> with a focus on <span className="font-weight-bolder" style={{color: "#1d4382"}}> User Experience Design and Research</span>, 
                        especially its psychological and persuasive aspects. I also enjoy <span className="font-weight-bolder" style={{color: "#1d4382"}}>front-end web development.</span>
                        </p>

                        <div className="row">
                            <div className="col-md-1">
                             <img className="linkedin" src={linkedin} alt=""></img>
                            </div>
                            <div className="linked col-md-3">
                                <a className="lead blue linkeda" href="https://www.linkedin.com/in/sblomkvist/" target="_blank"><span className="font-weight-bolder">Linkedin Profile</span></a>
                            </div>
                            <div className="atdiv col-md-1">
                             <p className="blue atmail"><span className="font-weight-bolder">@</span></p>
                            </div>
                            <div className="maildiv col-md-3">
                                <p className="lead mailtext"><span className="blue font-weight-bolder">sebastian@blomkvists.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="projects"></div>
                <hr/>
            </div>
            </div>
        )
    }
}

export default HomeIntro
