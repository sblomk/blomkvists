import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Carousel.jsx';
import './Home.css';
import { LatestProjects } from '../components/LatestProjects';
import { HomeIntro } from '../components/HomeIntro';

export class Home extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Carousel />
            <HomeIntro />
            <LatestProjects />
            <Footer />
            </>
        )
    }
}

export default Home
