import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './About.css';
import Jumbotron from '../components/Jumbotron';
import me from '../images/aboutMe.jpg'

export class About extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Jumbotron/>
            <div className="container" id="about" style={{height: '500px', marginTop: '75px'}}>
                <h1 className="text-center" data-aos="fade-up">About me</h1>
            </div>
            <Footer />
            </>
        )
    }
}

export default About