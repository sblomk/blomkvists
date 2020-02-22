import React from 'react'
import './ProjectModal.css';
import fogg from '../images/Fogg.jpg'
import site from '../images/carbonSite.png'
import principles from '../images/principles.png'
import persuasiveProcess from '../images/PersuasiveProcess.png'

function CarbonBudgetModal(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal4">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title font-weight-light blue" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <p className="lead">Depending on through which modality information is conveyed, we humans may perceive it differently.
                        This project examines how this can be used to <span className="blue font-weight-bolder">enhance the user experience</span> in
                         such a way that it <span className="blue font-weight-bolder">persuades the user</span> to change 
                        behavior into a more sustainable one.</p>
                        <div className="row introinfo">
                            <div className="col-md-6">
                            <h6 className="info">My Role</h6>
                            <p> UX Designer &amp; Front-end Developer</p>
                            </div>
                            <div className="col-md-3">
                            <h6 className="info">Year</h6>
                            <p> 2019</p>
                            </div>
                            <div className="col-md-3">
                            <h6 className="info">Done at </h6>
                            <p> KTH</p>
                            </div>
                        </div>
                        <h4 className="font-weight-normal">Process</h4>
                        <div className="processContainer">
                            <img className="processPic" src={persuasiveProcess} alt=""></img>
                        </div>
                        <h6>Research </h6><br></br>
                        <p> To create the website, I first had to research behavior change techniques and persuasive design and technologies. Some 
                        useful information that I found was for instance: that an increased social presence persuade easier and for a behavior 
                        to occur the user need sufficient motivation and ability and then a triggering event. </p>
                        <img className="foggPic" src={fogg} alt=""></img>
                        <h6>Wireframing </h6><br></br>
                        <p> To get a better grip on technical requirements, necessary functionality,  and how to 
                        structure the UI I started creating wireframes of the website. I did not want to use any placeholders or Lorem Ipsum for 
                        any kind of information, I wanted appropriate information included as much as possible in the wireframes so that I early would
                            get a feel of how the website would be perceived early on in the process. Based on the research I wanted to increase the social presence of the website
                            and to enhance the users motivation to change behavior.</p>
                        <h6>Web Development </h6><br></br>
                        <p> Two websites was developed using React.js, Bootstrap, and Chart.js. One with only visual 
                        feedback, such as a normal website, and another one with sound feedback as well. On the websites, users can calculate how long their 
                        lifelong carbon budget will last. The results was either presented only visually, through a graph and text, or with sound, music and voice, added. The voice was partly added in order to 
                        increase the social presence. The layout of the website was kept rather simple in favor for the user tests. </p>
                        <img className="sitePic" src={site} alt=""></img>
                        <h6>User Tests </h6><br></br>
                        <p> To determine any difference in persuasive effect between the two websites a between-subject user test 
                        was conducted. Before and after using the site, users was surveyed about their attitudes towards sustainable behavior. The results was a bit mixed, 
                        but in the end the website using both visual and sound feedback was concluded to have the greatest persuasive influence. Users of that website was more 
                        inclined and felt more motivated to adopt new sustainable behaviors.</p>
                        <h4 className="font-weight-normal">What I learned</h4>
                        <p>This is one of the projects that really sparked my interest in psychology and behavior, and how they can be influenced through UX design. 
                            During this project I further increased my knowledge of persuasion tactics, usable on digital platforms, which in this instance was used to 
                            foster sustainable behavior change. For example the principles of persuasion: Reciprocity, Scarcity, Authority, Commitment, Liking, and Social Proof. 
                            I also refreshed my web development skills and got better at developing surveys for user evaluations. </p>
                            <img className="sitePic" src={principles} alt=""></img>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default CarbonBudgetModal
