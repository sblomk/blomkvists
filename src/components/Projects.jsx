import React, { Component } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css';

import carbonIcon from '../images/avpro.jpg'
import bierIcon from '../images/bgt.jpg'
import genderIcon from '../images/genderIcon.JPG'
import bachelorIcon from '../images/KTH.png'
import veloIcon from '../images/veloIcon.png'
import running from '../images/spotifyRunning.jpg'
import runningProcess from '../images/RunningProcess.png'
import veloProcess from '../images/VeloProcess.png'
import genderProcess from '../images/GenderProcess.png'
import persuasiveProcess from '../images/PersuasiveProcess.png'
import runningProto from '../images/runningPrototype.png'
import bierProcess from '../images/BierProcess.png'
import bachelorProcess from '../images/BachelorProcess.png'
import ProjectModal1 from './ProjectModal1.jsx';
import ProjectModal2 from './ProjectModal2.jsx';
import ProjectModal3 from './ProjectModal3.jsx';
import ProjectModal4 from './ProjectModal4.jsx';


export class Projects extends Component {
    constructor(props){
        super(props)
        this.state ={
            id: "none",
            name: "none",
            brief: "none",
            description: "none",
            keywords: "none",
            process: "none",
            modal: "none",
            proto: "none"
        }
        this.details = this.details.bind(this)
        this.focusProject = React.createRef()
    }

    details(id, name, desc, keys, proc, brief, modal, proto){
        this.setState({
            id: id,
            name: name,
            description: desc,
            keywords: keys,
            process: proc,
            brief: brief,
            modal: modal,
            proto: proto
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
                    brief="Interaction with your phone during exercising can be troublesome. This UX design project set out to make this interaction easier, either by
                    introducing new ways of interacting or adding functionalities which removes the need to even interact with the application in the first place."
                    process={runningProcess}
                    keywords="UX design, Double Diamond, User Research, Hi-fi Prototyping, User Tests"
                    fullDescription="The Double Diamond design process was utilized which consists of four phases. First the discovery phase where we studied users, 
                    through interviews and surveys, and conducted a competative analysis of the field. The results of the first phase was then used in the second 
                    (define) phase where we created personas and scenarios to define design requirements and formulate our vision statement. Then we enter the develop 
                    phase where we started designing prototypes based on what we have learned in the previous phases. These prototypes was evaluated through user tests 
                    and based on that feedback we decided on a final prototype which we the finalized in last (deliver) phase. To minimize the need to interact with the 
                    application we implemented functionality which shapes the music to your running, in terms of tempo and mood. This would be based on sensor data from 
                    the phone. New functionality to lock the tempo, if  the user wishes to keep a certain tempo for a while, was introduced. To lock the tempo, the user 
                    just had to tap the phone, thus making interaction easier.
                    "
                    imgUrl={running}
                    details={this.details}
                    modal="#modal1"
                    proto={runningProto}/>
                <ProjectCard 
                    id="4"
                    name="Carbon Budgets"
                    description="By developing a website in React.js and conducting user tests I explored how the combination of sound and visual feedback 
                    influences persuasiveness."
                    process={persuasiveProcess}
                    keywords="Web Development, User Tests, Persuasive design"
                    fullDescription="In this project we explored how to visualize a carbon budget to raise awareness and motivate behavioral change. 
                    Our design process ended up in a website where users can explore how long their carbon budget will last based on their carbon emitting activities. 
                    This is done by the user entering information about these activities and the carbon budget will then be displayed in a graph over then user’s lifetime. 
                    The final design is focused on user friendliness, at the cost of precision in the presented result. Mostly due to the use of non scientific units 
                    in both the entering of information by the user and the end result. The key aspect of the design aimed towards raising awareness is the direct 
                    feedback in the graph and the top menu when changing the inputted information, showing the user how much carbon certain behaviors emits and how fast 
                    it depletes the budget. This may result in negative valence which is prone to raise awareness but, on the other hand, also decrease user engagement. 
                    This is by some extent combated by an overall positive design of the website and the use of easily understandable metrics to easen engagement with the site."
                    imgUrl={carbonIcon}
                    details={this.details}
                    modal="#modal4"/>
                <ProjectCard 
                    id="2"
                    name="The Velo" 
                    description="Concept of a smart navigation device for bicycles. Presenting the Velo, a circular module with a matte screen, 
                    an interactive turning wheel and a ring of green LED-lights around it."
                    process={veloProcess}
                    keywords="UX design, User Research, Prototyping"
                    fullDescription="In this project we developed a concept of a smart navigation device for bicycles. Presenting the Velo, a circular module with a matte screen, 
                    an interactive turning wheel and a ring of green LED-lights around it.  It allows you to search for a location, and then show you the way to it through the 
                    ring of LEDs. Or as we like to call it, the compass ring. This can be done either directly by pre-set locations on the Velo, or by searching manually in the 
                    accompanying smartphone app. We started out by conductiong fields studies where we interviewed bikers on the street. Out of our responses, the main factor for choosing the 
                    bike was that it was quicker to get through city, that you don’t have to adapt to the public transportation timetables, and that it was a more pleasant ride overall.
                    From these results we created personas to further aid us in the design process."
                    imgUrl={veloIcon}
                    details={this.details}
                    modal="#modal2"/>
                <ProjectCard 
                    id="3"
                    name="GendeRadar" 
                    description="This project is about visualizing the variables which the gender inequality index is built upon and to show how gender 
                    inequality looks on a world wide scale."
                    process={genderProcess}
                    keywords="Information Architecture, Front-end Development, Heuristic Evaluation"
                    fullDescription="Gender inequality is a huge problem in the world that hinders the development of a globalized, equal society.
                    The united nations has been working to tackle this problem in various ways. One of their measurements is the
                    gender inequality index. This index is based upon different variables that indicates how developed a country is
                    when it comes to equality.
                    This project is about visualizing these variables and to show how gender inequality looks on a world wide
                    scale. The service itself is directed towards people without a lot of knowledge about these variables and how
                    gender inequality is measured. We tried to visualize the data provided from the united nations in the most
                    simple way possible.
                    Here is how the service works:
                    When a user first enters the service, a world map is shown with the gender inequality index displayed. The
                    different colors show different values and a user can hover over a country to see the exact value for a specific
                    year. The year can be changed in a slider just beneath the world map. To the right, there is a tree that can
                    shows the different variables in different nodes. This is used to filter the map and its content on variables. Let’
                    s say a user want to look at how the Female Labour index looks like. Then one simply clicks the node and the
                    entire map will show details on that specific variable as well as information about what the variable actually
                    measures Just beneath the tree.
                    Furthermore, by clicking a country, a user can get information about the specific variable for the specific
                    country and its development over time. If a country is not clicked, the details will show how the variable has
                    changed for the entire world over time."
                    imgUrl={genderIcon}
                    details={this.details}
                    modal="#modal3" />
                {/* <ProjectCard 
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
                <ProjectModal1
                    id="projectModal1"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    process={this.state.process}
                    brief={this.state.brief}
                    modal={this.state.modal}
                    proto={this.state.proto}/>
                <ProjectModal2
                    id="projectModal2"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    process={this.state.process}
                    brief={this.state.brief}
                    modal={this.state.modal}/>
                <ProjectModal3
                    id="projectModal3"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    process={this.state.process}
                    brief={this.state.brief}
                    modal={this.state.modal}/>
                <ProjectModal4
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
