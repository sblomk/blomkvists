import React, { Component } from 'react'
import './Home.css';
import Navbar from '../components/Navbar.jsx';
import { Projects } from '../components/Projects';
import { HomeIntro } from '../components/HomeIntro';
import { AboutMe } from '../components/AboutMe';
import { CurrentWork } from '../components/CurrentWork';
import { Footer } from '../components/Footer';

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
            <CurrentWork/>
            <Projects ref={this.projects}/>
            <AboutMe/>
            <Footer/>
            </>
        )
    }
}

export default Home
