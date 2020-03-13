import React, { Component } from 'react';
import './Footer.css';
import { Event } from "./Tracking";

export class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <p className="footlead">Wanna say hi?</p>
                    <a  className="lead footlinkeda" href="https://www.linkedin.com/in/sebastian-blomkvist-429739150/" onClick={()=> Event("Contact", "Clicked Linkedin link", "Footer")} target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <p className="lead footmail">sebastian@blomkvists.com</p>
                </div>
                <div className="footer-copyright text-center py-3">© Sebastian Blomkvist {(new Date().getFullYear())}
                </div>
            </footer>
        )
    }
}

export default Footer
