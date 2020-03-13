import React from 'react'
import './ProjectCard.css';
import { Event } from "./Tracking";

function ProjectCard(props) {

    return (
        <>
            <div className="projectCard col-md-5" style={{ padding: '2%' }}>
                <div className="cardImgContainer">
                <a onClick={() => {props.details(props.id, props.name, props.keywords, props.process, props.modal, props.proto); Event("Projects", "Clicked project", props.name)}} data-toggle="modal" data-target={props.modal}><img src={props.imgUrl} className="cardImg latest d-block w-100" alt="" style={{ backgroundColor: "#ebfcf1", cursor: "pointer" }} onClick={() => props.details(props.id,props.name, props.keywords, props.process, props.modal, props.proto)}/>
                    <div className="middle">   
                    </div>
                </a>
                </div>
                <div style={{ height: '245px', overflow: 'hidden', paddingLeft: '1%', paddingRight: '1%' }}>
                    <a className="cardh3a" onClick={() => {props.details(props.id, props.name, props.keywords, props.process, props.modal, props.proto); Event("Projects", "Clicked project", props.name)}} data-toggle="modal" data-target={props.modal}>
                        <h3 className="cardh3 font-weight-normal">{props.name}</h3>
                    </a>
                    <p>{props.description}</p>
                    <p className="keysP"><span className="font-weight-bolder">Keywords: </span><cite title="keys">{props.keywords}</cite></p>
                </div>
            </div>
        </>

    )

}

export default ProjectCard
