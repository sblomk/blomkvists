import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                <div className="container">
                <div className="blomtainer">
                    <h4>Sebastian<br/>Blomkvist</h4>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="div-inline my-2 my-lg-0">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About me</a>
                    </li>
                    </ul>
                </div>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
