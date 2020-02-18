import React from 'react'
import './ProjectModal.css';

function ProjectModal3(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal3">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title font-weight-light blue" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <p>{props.brief}</p>
                            <h4 className="font-weight-normal">Process</h4>
                            <div className="processContainer">
                                <img className="processPic" src={props.process} alt=""></img>
                            </div>
                            <p> <h6>Research </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <p> <h6>Wireframing </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <p> <h6>Web Development </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <p> <h6>Heuristic Evaluation </h6><br></br>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <br></br>
                            <h4 className="font-weight-normal">What I learned</h4>
                            <p>I learned things about blalal and experienced balalal when implementing blalal</p>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default ProjectModal3
