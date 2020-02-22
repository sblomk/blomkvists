import React from 'react'
import './ProjectModal.css';
import map from '../images/veloMap.jpg'
import brain from '../images/brainstormingVelo.jpg'
import app from '../images/veloApp.png'
import velo from '../images/veloType.png'
import veloProcess from '../images/VeloProcess.png'

function VeloModal(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal2">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title font-weight-light blue" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <p className="lead">In this <span className="blue font-weight-bolder">UX design project</span> we developed a concept of a smart navigation device for bicycles. 
                                Presenting the Velo, a circular module with a matte screen, an interactive turning wheel and a ring of green LED-lights around it.</p>
                            <div className="row introinfo">
                                <div className="col-md-6">
                                <h6 className="info">My Role</h6>
                                <p> UX Designer &amp; Researcher</p>
                                </div>
                                <div className="col-md-3">
                                <h6 className="info">Year</h6>
                                <p> 2017</p>
                                </div>
                                <div className="col-md-3">
                                <h6 className="info">Done at </h6>
                                <p> KTH</p>
                                </div>
                            </div>
                            <h4 className="font-weight-normal">Process</h4>
                            <div className="processContainer">
                                <img className="processPic" src={veloProcess} alt=""></img>
                            </div>
                            <h6>Research </h6><br></br>
                            <p> To identify why people chose the bicycle as their mode of transportation and potential pain points, interviews with bicyclists was held. 
                            Initially we began de ideation process by brainstorming together a mind-map of bicycle related things to get an idea 
                            of what to include in the interview questions.</p>
                            <img className="mapPic" src={map} alt=""></img>
                            <p>Among other things, we learned that people bicycled because it was the fastest alternative and that it offered a lot of freedom and exercise. Some pain 
                                points was the availability of air pumps and bike lanes in the city.  </p>
                            <h6>UX Competative Analysis </h6><br></br>
                            <p> Here I looked at a number of bike gadgets and how they were designed to either be used on a bicycle or 
                            attached to it. Some examples are the Hövding-helmet, lightweight portable pumps, and navigational devices.</p>
                            <h6>Personas and Brainstorming </h6><br></br>
                            <p> From the results of the user research we developed personas which we the used in a series of brainstorming exercises, 
                            parallel design and collaborative iteration, to generate new design ideas. The personas was also used in establishing 
                            functional requirements such as lightweight, durable and easy access.</p>
                            <img className="mapPic" src={brain} alt=""></img>
                            <h6>Goals &amp; Visions </h6><br></br>
                            <p> We set our goal to aiding bicyclists in reaching their destination as efficiently as possible. The vision being:
                             to empower people to take their bicycle wherever they want to go. We therefore set our sights on creating a navigation device, 
                             connected to your smartphone, specifically designed for bicycles and bicyclist’s needs. 
                            </p>
                            <h6>Prototyping </h6><br></br>
                            <p> Two digital prototypes, one for the device (the actual Velo) and one for the mobile app, was developed. First we created wireframes 
                            and a basic site map. </p>
                            <img className="mapPic" src={app} alt=""></img>
                            <p>Then high fidelity interactive prototypes was developed, using the Just in Mind prototyping tool. The Velo itself consists of a circular module with a matte screen and a ring of green LED-lights around it. It allows you to search 
                                for a location and then show you the way to it, either directly by pre-set locations on the Velo, or by searching 
                                manually in the accompanying smartphone app. It then shows you the way through the ring of LEDs around the screen, 
                                or as we like to call it, the compass ring.</p>
                            <img className="typePic" src={velo} alt=""></img>
                            <p> In the app you control things like setting a custom destination, as well as configuring your 
                                pre-set destinations and mode configurations for direct use in the Velo. You can also see the overall statistics of 
                                your health, with for example calories burnt or distance biked this week, month or for the whole year.</p>
                            <h4 className="font-weight-normal">What I learned</h4>
                            <p>During this project I got better at the ideation phase, learning and applying new brainstorming methods which really 
                                proved useful for coming up with new design solutions. I also found these methods being good team building exercises 
                                and helped us communicate better. Further I got better at developing interactive prototypes. This is important to be able to test
                                the design on users and gain feedback on which improvements can be made.  </p>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default VeloModal
