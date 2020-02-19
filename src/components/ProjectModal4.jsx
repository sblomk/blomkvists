import React from 'react'
import './ProjectModal.css';
import fogg from '../images/Fogg.jpg'

function ProjectModal4(props) {
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
                            <h4 className="font-weight-normal">Process</h4>
                            <div className="processContainer">
                                <img className="processPic" src={props.process} alt=""></img>
                            </div>
                            <p> <h6>Research </h6><br></br>
                            To create the website, I first had to research behavior change techniques and persuasive design and technologies. Some 
                            useful information that I found was for instance: that an increased social presence persuade easier and for a behavior 
                            to occur the user need sufficient motivation and ability and then a triggering event. </p>
                            <img className="foggPic" src={fogg} alt=""></img>
                            <p> <h6>Wireframing </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <p> <h6>Web Development </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <p> <h6>User Tests </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <br></br>
                            <h4 className="font-weight-normal">What I learned</h4>
                            <p>I learned things about blalal and experienced balalal when implementing blalal</p>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default ProjectModal4
