import React, { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';
import carbonIcon from '../images/avpro.jpg';
import bierIcon from '../images/bgt.jpg';
import infoIcon from '../images/info.jpg';
import genderIcon from '../images/genderIcon.JPG'
import bachelorIcon from '../images/KTH.png'
import veloIcon from '../images/veloIcon.png'

export class Projects extends Component {
    render() {
        return (
            <div className="container" id="projects">
                <div className="row" style={{marginBottom: '50px'}}>
                <ProjectCard 
                    name="Carbon Budget" 
                    description="This concept website visualises a person's carbon budget(s) using negative slope graphs customized by user input."
                    keywords="Sustainable HCI, carbon budgets, prototyping, persuasive design"
                    imgUrl={carbonIcon}/>
                <ProjectCard 
                    name="BierGarten" 
                    description="Some parks in Stockholm has set up rules for prohibiting public drinking while other parks haven't. 
                    What BierGarten has sought to achieve is an increase in accessibility of these rules. 
                    This would be of purpose for people eager to drink in a park"
                    keywords="Web development, Google Maps API"
                    imgUrl={bierIcon}/>
                <ProjectCard 
                    name="Genderadar" 
                    description="This project is about visualizing the variables which the gender inequality index is built upon and to show how gender 
                    inequality looks on a world wide scale."
                    keywords="Information visualization, gender inequality, D3.js, angularJS"
                    imgUrl={genderIcon}/>
                <ProjectCard 
                    name="Social Media Use" 
                    description="Bachelor thesis"
                    keywords="User study, interviews, social media, privacy, informational norms"
                    imgUrl={bachelorIcon}/>
                <ProjectCard 
                    name="Happiness and values" 
                    description="This site gives you the possility to explore how highly different aspects of life are valued in varoius 
                    countries and how this go together with the happiness and life satisfaction of the population in these countries across 20 years."
                    keywords="Information visualization, D3.js, javascript"
                    imgUrl={infoIcon}/>
                <ProjectCard 
                    name="Velo" 
                    description="Concept of a smart navigation device for bicycles. Presenting the Velo, a circular module with a matte screen, 
                    an interactive turning wheel and a ring of green LED-lights around it"
                    keywords="HCI, UX, design process, field studies, evaluation methods"
                    imgUrl={veloIcon}/>
                <ProjectCard 
                    name="Carbon Budget" 
                    description="This concept website visualises a person's carbon budget(s) using negative slope graphs customized by user input."
                    keywords="Sustainable HCI, carbon budgets, prototyping, persuasive design"
                    imgUrl={carbonIcon}/>
                <ProjectCard 
                    name="BierGarten" 
                    description="Some parks in Stockholm has set up rules for prohibiting public drinking while other parks haven't. 
                    What BierGarten has sought to achieve is an increase in accessibility of these rules. 
                    This would be of purpose for people eager to drink in a park"
                    keywords="Web development, Google Maps API"
                    imgUrl={bierIcon}/>
                <ProjectCard 
                    name="Genderadar" 
                    description="This project is about visualizing the variables which the gender inequality index is built upon and to show how gender 
                    inequality looks on a world wide scale."
                    keywords="Information visualization, gender inequality, D3.js, angularJS"
                    imgUrl={genderIcon}/>
                </div>
            </div>
        )
    }
}

export default Projects
