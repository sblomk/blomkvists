import React, { Component } from 'react';
import './Footer.css';
import lin from '../images/lin.png';

export class Footer extends Component {
    render() {
        return (
            <footer className="page-footer mt-auto font-small bg-light">
                <div className="container col text-center">
                    <a href="https://www.linkedin.com/in/sebastian-blomkvist-429739150/">
                    <img alt="LinkedIn" className="contactImg" src={lin}></img>
                    </a>
                </div>
                <div className="footer-copyright text-center py-3">Created by Sebastian Blomkvist, {(new Date().getFullYear())}
                </div>
            </footer>
        )
    }
}

export default Footer
