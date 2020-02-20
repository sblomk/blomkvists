import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './Home.css';
import { Projects } from '../components/Projects';
import { HomeIntro } from '../components/HomeIntro';
import { AboutMe } from '../components/AboutMe';
import { CurrentWork } from '../components/CurrentWork';

export class Home extends Component {
    constructor(props){
        super(props)
        this.scrollToProjects = this.scrollToProjects.bind(this)
        this.projects = React.createRef()
    }


    //Not implemented
    scrollToProjects(){
        if(this.projects.current){
            this.projects.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
            })
        }
    }

    render() {
        return (
            <>
            <Navbar />
            <HomeIntro scrollToProjects={this.scrollToProjects}/>
            <Projects ref={this.projects}/>
            <CurrentWork/>
            <AboutMe/>
            <Footer />
            </>
        )
    }
}

export default Home
