import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';
import me from '../images/studyPic.jpg';
import ux from '../images/UXpic.jpg';
import hci from '../images/bizPic.jpg';
import sust from '../images/sustainable.jpg'

export class Carousel extends Component {
    render() {
        return (
            <div className="carouselContainer" id="topCarousel">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img src={me} className="d-block w-100" alt="sebastian blomkvist"/>
                        <Link to="/about">
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Sebastian Blomkvist</h1>
                            <p>M.Sc.Eng Interactive Media Technology</p>
                            <div style={{height: '50px'}}></div>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <img src={ux} className="d-block w-100" alt="User experience design"/>
                        <a href="#projects">
                            <div className="carousel-caption d-none d-md-block">                        
                            <h1>User Experience Design</h1>
                            <p>View more projects in UX design.</p>
                            <div style={{height: '50px'}}></div>
                            </div>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <img src={hci} className="d-block w-100" alt="Human-Computer interaction"/>
                        <a href="#projects">
                            <div className="carousel-caption d-none d-md-block">
                            <h1 className="darker">Human-Computer Interaction</h1>
                            <p className="darker">View more projects in Human-computer interaction</p>
                            <div style={{height: '50px'}}></div>
                            </div>
                        </a>
                    </div>
                    <div className="carousel-item">
                        <img src={sust} className="d-block w-100" alt="sustainability"/>
                        <a href="#projects">
                            <div className="carousel-caption d-none d-md-block">
                            <h1>Sustainable HCI</h1>
                            <p>View more projects in sustainable HCI</p>
                            <div style={{height: '50px'}}></div>
                            </div>
                        </a>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel
