import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="blomtainer">
                    <h3>Blomkvist's</h3>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#topCarousel">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About me</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
