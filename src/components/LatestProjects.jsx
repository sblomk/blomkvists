import React, { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import './LatestProjects.css';
import pic1 from '../images/avpro.jpg';
import pic2 from '../images/bgt.jpg';
import pic3 from '../images/info.jpg';

export class LatestProjects extends Component {
    render() {
        return (
            <div className="container">
                <h2>Latest works</h2>
                <div className="row" style={{marginBottom: '50px'}}>
                <ProjectCard 
                    name="Carbon Budget" 
                    description="The carbon budget needs to be in line with what it takes to keep the global temperature under the target temperature (+2 degrees celsius) 
                    to keep climate change at bay. This website visualises a person's carbon budget(s) using negative slope graphs customized by user input."
                    imgUrl={pic1}/>
                <ProjectCard 
                    name="BierGarten" 
                    description="Some parks in Stockholm has set up rules for prohibiting public drinking while other parks haven't. 
                    What BierGarten has sought to achieve is an increase in accessibility of these rules. 
                    This would be of purpose for people eager to drink in a park. The website is only optimized for smartphones!"
                    imgUrl={pic2}/>
                <ProjectCard 
                    name="Happiness and values" 
                    description="This site gives you the possility to explore how highly different aspects of life are valued in varoius 
                    countries and how this go together with the happiness and life satisfaction of the population in these countries across 20 years."
                    imgUrl={pic3}/>
                </div>
            </div>
        )
    }
}

export default LatestProjects
