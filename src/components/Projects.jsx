import React, { Component } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css';

import carbonIcon from '../images/avpro.jpg'
import bierIcon from '../images/bgt.jpg'
import genderIcon from '../images/genderIcon.JPG'
import bachelorIcon from '../images/KTH.png'
import veloIcon from '../images/veloIcon.png'
import running from '../images/spotifyRunning.jpg'
import bierProcess from '../images/BierProcess.png'
import bachelorProcess from '../images/BachelorProcess.png'
import SpotifyRunningModal from './SpotifyRunningModal.jsx';
import GendeRadarModal from './GendeRadarModal.jsx';
import CarbonBudgetModal from './CarbonBudgetModal.jsx';
import VeloModal from './VeloModal.jsx';


export class Projects extends Component {
    constructor(props){
        super(props)
        this.state ={
            id: "none",
            name: "none",
            brief: "none",
            description: "none",
            keywords: "none",
            modal: "none",
        }
        this.details = this.details.bind(this)
        this.focusProject = React.createRef()
    }

    details(id, name, desc, keys, modal, proto){
        this.setState({
            id: id,
            name: name,
            description: desc,
            keywords: keys,
            modal: modal,
        })
    }

    render() {
        return (
            <>
            <div className="container">
                <h1 className="projecth1 font-weight-normal">Selected Projects</h1>
            </div>
            <div className="container">
                <div className="row" style={{marginBottom: '50px'}}>
                <ProjectCard 
                    id="1"
                    name="Spotify Running 2.0"
                    description="Redesigning spotify's 'Running' feature using the Double Diamond in the UX design process. New ways of interacting with the application was developed
                    as well as new functionality."
                    keywords="UX design, Double Diamond, User Research, Hi-fi Prototyping, User Tests"
                    imgUrl={running}
                    details={this.details}
                    modal="#modal1"/>
                <ProjectCard 
                    id="4"
                    name="Carbon Budgets"
                    description="By developing a website in React.js and conducting user tests I explored how the combination of sound and visual feedback 
                    influences persuasiveness."
                    keywords="Web Development, User Tests, Persuasive design"
                    imgUrl={carbonIcon}
                    details={this.details}
                    modal="#modal4"/>
                <ProjectCard 
                    id="2"
                    name="The Velo" 
                    description="Concept of a smart navigation device for bicycles. Presenting the Velo, a circular module with a matte screen, 
                    an interactive turning wheel and a ring of green LED-lights around it."
                    keywords="UX design, User Research, Prototyping"
                    imgUrl={veloIcon}
                    details={this.details}
                    modal="#modal2"/>
                <ProjectCard 
                    id="3"
                    name="GendeRadar" 
                    description="This project is about visualizing the variables which the gender inequality index is built upon and to show how gender 
                    inequality looks on a world wide scale."
                    keywords="Information Architecture, Front-end Development, Heuristic Evaluation"
                    imgUrl={genderIcon}
                    details={this.details}
                    modal="#modal3" />
                {/*<ProjectCard 
                    id="5"
                    name="Social Media Use" 
                    description="Bachelor thesis exploring how and why users of social media distribute their activity over several of these at the same time."
                    process={bachelorProcess}
                    keywords="UX research, User Interviews, Competative Analysis"
                    fullDescription="This qualitative study examines how and why users of social media distribute their activity over several of these at the same time. 
                    Focus was on the three social media sites of Facebook, Instagram and Snapchat. The study was carried through by keeping paired interviews with users 
                    of these sites and then applying the results on the framework of contextual integrity. The result of the study is interesting both for companies 
                    developing and using social media sites, as well as for future research in the field.
                    The results showed a difference in the sharing of information across the three different sites. 
                    The foremost cause to the difference was identified to be the size of the social networks on the sites, and the influence 
                    this had on what was perceived as an intrusion in the privacy of the user when the information was shared. Aside from the increased 
                    visibility that comes with a larger social network, it also affected the underlying activity of the social medium. Which can be seen 
                    as a reason for a decreasing active use. The conclusions about the future were that social media, today and in the future, have to 
                    give the users an option to separate their social network on the sites into separate groups. Alternatively that the social media 
                    sites themselves has to become niched for a specific part of a user’s social network. This will allow the users to share acceptable 
                    information in suitable channels.
                    "
                    imgUrl={bachelorIcon}
                    details={this.details}/>
                <ProjectCard 
                    id="6"
                    name="BierGarten"
                    process={bierProcess}
                    description="Some parks in Stockholm has set up rules for prohibiting public drinking while other parks haven't. 
                    What BierGarten has sought to achieve is an increase in accessibility of these rules. 
                    This would be of purpose for people eager to drink in a park"
                    keywords="Web Development, Google Maps API"
                    fullDescription="A real life problem that you may have stumbled across is the legitimacy and availability of 
                    public drinking in the parks of Stockholm. Some parks in Stockholm has set up rules for prohibiting public drinking while 
                    other parks haven’t. What BierGarten has sought to achieve is an increase in accessibility of these rules. This would be of 
                    purpose for people eager to drink in a park. Some technologies used to create this was Google Maps API, Onsen UI, JavaScript, HTML, and CSS"
                    imgUrl={bierIcon}
                    details={this.details}/> */}
                <SpotifyRunningModal
                    id="projectModal1"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    process={this.state.process}
                    brief={this.state.brief}
                    modal={this.state.modal}
                    proto={this.state.proto}/>
                <VeloModal
                    id="projectModal2"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    process={this.state.process}
                    brief={this.state.brief}
                    modal={this.state.modal}/>
                <GendeRadarModal
                    id="projectModal3"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    process={this.state.process}
                    brief={this.state.brief}
                    modal={this.state.modal}/>
                <CarbonBudgetModal
                    id="projectModal4"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    process={this.state.process}
                    brief={this.state.brief}
                    modal={this.state.modal}/>
                </div>
                <div id="about"></div>
                <hr></hr>
            </div>
            </>
        )
    }
}

export default Projects
