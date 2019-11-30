import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Carousel.jsx';
import './Home.css';
import { Projects } from '../components/Projects';
import { HomeIntro } from '../components/HomeIntro';

export class Home extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Carousel />
            <HomeIntro />
            <div className="container">
                <h1>Projects</h1>
            </div>
            <Projects />
            <Footer />
            </>
        )
    }
}

export default Home
