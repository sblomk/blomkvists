import React, { Component } from 'react'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css';
import ProjectCollapse from './ProjectCollapse.jsx'

import carbonIcon from '../images/avpro.jpg'
import bierIcon from '../images/bgt.jpg'
import infoIcon from '../images/info.jpg'
import genderIcon from '../images/genderIcon.JPG'
import bachelorIcon from '../images/KTH.png'
import veloIcon from '../images/veloIcon.png'
import running from '../images/spotifyRunning.jpg'



export class Projects extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "none",
            collapseShow: false,
            description: "none",
            keywords: "none"
        }
        this.details = this.details.bind(this)
        this.closeCollapse = this.closeCollapse.bind(this)
        this.focusProject = React.createRef()
    }

    details(name, desc, keys){
        if(this.state.collapseShow=== true){
            this.setState({
                name: name,
                description: desc,
                keywords: keys
            })
            if(this.focusProject.current){
                this.focusProject.current.scrollIntoView({ 
                behavior: "smooth", 
                block: "nearest"
                })
            }
        } else{
            this.setState({
                name: name,
                collapseShow: true, 
                description: desc,
                keywords: keys
            })
            if(this.focusProject.current){
                this.focusProject.current.scrollIntoView({ 
                behavior: "smooth", 
                block: "nearest"
                })
            }
        }
    }

    closeCollapse(){
        this.setState({
            collapseShow: false,
        })
    }

    render() {
        return (
            <>
            <div className="container">
            <hr ref={this.focusProject}/>
                <h1>Projects</h1>
            </div>
            <div className="container" id="projects">
                <div className="row" style={{marginBottom: '50px'}}>
                <ProjectCollapse 
                    id="collapse"
                    name={this.state.name}
                    fullDescription={this.state.description}
                    keywords={this.state.keywords}
                    collapseShow={this.state.collapseShow}
                    closeCollapse={this.closeCollapse}/>
                <ProjectCard 
                    name="Carbon Budget"
                    description="This concept website visualises a person's carbon budget(s) using negative slope graphs customized by user input."
                    keywords="Sustainable HCI, carbon budgets, prototyping, persuasive design"
                    fullDescription="In this project we explored how to visualize a carbon budget to raise awareness and motivate behavioral change. 
                    Our design process ended up in a website where users can explore how long their carbon budget will last based on their carbon emitting activities. 
                    This is done by the user entering information about these activities and the carbon budget will then be displayed in a graph over then user’s lifetime. 
                    The final design is focused on user friendliness, at the cost of precision in the presented result. Mostly due to the use of non scientific units 
                    in both the entering of information by the user and the end result. The key aspect of the design aimed towards raising awareness is the direct 
                    feedback in the graph and the top menu when changing the inputted information, showing the user how much carbon certain behaviors emits and how fast 
                    it depletes the budget. This may result in negative valence which is prone to raise awareness but, on the other hand, also decrease user engagement. 
                    This is by some extent combated by an overall positive design of the website and the use of easily understandable metrics to easen engagement with the site."
                    imgUrl={carbonIcon}
                    details={this.details}/>
                <ProjectCard 
                    name="Velo" 
                    description="Concept of a smart navigation device for bicycles. Presenting the Velo, a circular module with a matte screen, 
                    an interactive turning wheel and a ring of green LED-lights around it"
                    keywords="HCI, UX design, design processes, field studies, evaluation methods"
                    fullDescription="In this project we developed a concept of a smart navigation device for bicycles. Presenting the Velo, a circular module with a matte screen, 
                    an interactive turning wheel and a ring of green LED-lights around it.  It allows you to search for a location, and then show you the way to it through the 
                    ring of LEDs. Or as we like to call it, the compass ring. This can be done either directly by pre-set locations on the Velo, or by searching manually in the 
                    accompanying smartphone app. We started out by conductiong fields studies where we interviewed bikers on the street. Out of our responses, the main factor for choosing the 
                    bike was that it was quicker to get through city, that you don’t have to adapt to the public transportation timetables, and that it was a more pleasant ride overall.
                    From these results we created personas to further aid us in the design process."
                    imgUrl={veloIcon}
                    details={this.details}/>
                <ProjectCard 
                    name="Genderadar" 
                    description="This project is about visualizing the variables which the gender inequality index is built upon and to show how gender 
                    inequality looks on a world wide scale."
                    keywords="Information visualization, gender inequality, D3.js, angularJS"
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
                    details={this.details} />
                <ProjectCard 
                    name="Spotify running"
                    description="Redesigning spotify's 'Running' function using the Double Diamond deisgn process. New ways of interacting with the application was developed
                    as well as new functionality."
                    keywords="HCI, UX design, double diamond, user studies, hi-fi prototyping, evaluation methods"
                    fullDescription="A real life problem that you may have stumbled across is the legitimacy and availability of 
                    public drinking in the parks of Stockholm. Some parks in Stockholm has set up rules for prohibiting public drinking while 
                    other parks haven’t. What BierGarten has sought to achieve is an increase in accessibility of these rules. This would be of 
                    purpose for people eager to drink in a park. Some technologies used to create this was Google Maps API, Onsen UI, JavaScript, HTML, and CSS"
                    imgUrl={running}
                    details={this.details}/>
                <ProjectCard 
                    name="Social Media Use" 
                    description="Bachelor thesis"
                    keywords="User study, interviews, social media, privacy, informational norms"
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
                    name="BierGarten"
                    description="Some parks in Stockholm has set up rules for prohibiting public drinking while other parks haven't. 
                    What BierGarten has sought to achieve is an increase in accessibility of these rules. 
                    This would be of purpose for people eager to drink in a park"
                    keywords="Web development, Google Maps API"
                    fullDescription="A real life problem that you may have stumbled across is the legitimacy and availability of 
                    public drinking in the parks of Stockholm. Some parks in Stockholm has set up rules for prohibiting public drinking while 
                    other parks haven’t. What BierGarten has sought to achieve is an increase in accessibility of these rules. This would be of 
                    purpose for people eager to drink in a park. Some technologies used to create this was Google Maps API, Onsen UI, JavaScript, HTML, and CSS"
                    imgUrl={bierIcon}
                    details={this.details}/>
                <ProjectCard 
                    name="Happiness and values" 
                    description="This site gives you the possility to explore how highly different aspects of life are valued in varoius 
                    countries and how this go together with the happiness and life satisfaction of the population in these countries across 20 years."
                    keywords="Information visualization, D3.js, javascript"
                    fullDescription="This site gives you the possility to explore how highly different aspects of life are valued in
                    varoius countries and how this go together with the happiness and life satisfaction of the population in these countries across 20 years.
                    It is possible to filter what value that are shown on the map and you can then see what percentage of the population
                    that percieve that value as very important. Or you can see what percentage are happy or satisfied with their life.
                    With a click on the map you can zoom in and explore all the value variables for a specific country over a 20-year span.
                    You can filter for what variables to look at and compare. Here it is also possible to compare values of the chosen country with another country's.
                    Use the filters on the world map to find a country that you want to be in your comparison."
                    imgUrl={infoIcon}
                    details={this.details}/>
                </div>
            </div>
            </>
        )
    }
}

export default Projects
