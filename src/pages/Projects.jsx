import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbutron from '../components/Jumbotron.jsx';
import './Projects.css';

export class Home extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Jumbutron title="Projects"/>
            <div className="container" id="about" style={{height: '500px', marginTop: '100px'}}>
                <h1 className="text-center" data-aos="fade-up">What I've done</h1>
            </div>
            <Footer />
            </>
        )
    }
}

export default Home