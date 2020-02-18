import React from 'react'
import './ProjectModal.css';

function ProjectModal1(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title font-weight-light blue" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <p className="lead">Interaction with your phone during exercising just to listen to music can be troublesome. This <span className="blue font-weight-bolder">UX design project </span> 
                            set out to make this<span className="blue font-weight-bolder"> interaction easier</span>.</p>
                            <h4 className="font-weight-normal">Process</h4>
                            <div className="processContainer">
                                <img className="processPic" src={props.process} alt=""></img>
                            </div>
                            <p> <h6>User Research </h6><br></br>Interviewed potential users about how and why they use music while exercising, what their goal 
                            is and to identify pain points. One thing learned was that users listened to music to get a boost while exercising, but they 
                            thought that it was a hassle to get the music to adapt to their workout.</p>
                            <p> <h6>Personas </h6><br></br>Based on the user research we defined a target group and personas to help us develop design requirements, 
                            such as uninterruptive interaction.   
                             </p>
                            <p> <h6>Competative Analysis </h6><br></br>Here I looked at other apps commonly used while exercising, such as Runkeeper. 
                            One of its strengths for example was its lack of needed interaction. </p>
                            <p> <h6>Goals &amp; Visions </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <p> <h6>Prototyping </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <p> <h6>User Tests </h6><br></br>Put users in a scenario and performing a 
                            think-aloud to catch potential design problems while using the prototype. Used Microsoft Reaction Card Method to test the desirability of the prototype. Short user interview.</p>
                            <br></br>
                            <h4 className="font-weight-normal">What I Learned</h4>
                            <p>I learned things about blalal and experienced balalal when implementing blalal</p>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default ProjectModal1
