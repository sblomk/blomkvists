import React, { Component } from 'react'
import './Home.css';
import {PageView, initGA} from '../components/Tracking';
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

    componentDidMount() {
        initGA('UA-159829577-1');
        PageView();
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
