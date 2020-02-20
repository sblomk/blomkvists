import React, { Component } from 'react';
import './Footer.css';
import lin from '../images/lin.png';

export class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container co">
                    <p className="footlead">Wanna say hi?</p>
                    <a className="linkedin" href="https://www.linkedin.com/in/sebastian-blomkvist-429739150/" target="_blank">Linkedin</a>
                    <p className="linkedin">sebastian@blomkvists.com</p>
                </div>
                <div className="footer-copyright text-center py-3">© Sebastian Blomkvist {(new Date().getFullYear())}
                </div>
            </footer>
        )
    }
}

export default Footer
