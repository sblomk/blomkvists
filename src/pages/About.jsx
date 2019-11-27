import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './About.css';
import { Jumbotron } from '../components/Jumbotron';

export class Home extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Jumbotron title="Who am I?" pic="../images/aboutMe.jpg"/>
            <div className="container" id="about" style={{height: '500px', marginTop: '100px'}}>
                <h1 className="text-center" data-aos="fade-up">About me</h1>
            </div>
            <Footer />
            </>
        )
    }
}

export default Home