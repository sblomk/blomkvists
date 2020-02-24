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
    }


    render() {
        return (
            <>
            <Navbar />
            <HomeIntro />
            <CurrentWork/>
            <Projects />
            <AboutMe/>
            <Footer/>
            </>
        )
    }
}

export default Home
