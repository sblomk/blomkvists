import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Carousel.jsx';
import './Home.css';
import { Projects } from '../components/Projects';
import { HomeIntro } from '../components/HomeIntro';

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
            {/* <Carousel /> */}
            <HomeIntro scrollToProjects={this.scrollToProjects}/>
            <Projects ref={this.projects}/>
            <Footer />
            </>
        )
    }
}

export default Home
