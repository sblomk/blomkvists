import React from 'react'
import './ProjectCard.css';

function ProjectCard(props) {

    return (
        <>
            <div className="projectCard col-md-5" style={{ padding: '2%' }}>
                <div className="cardImgContainer">
                    <img src={props.imgUrl} className="cardImg latest d-block w-100" alt="" style={{ backgroundColor: "#ebfcf1", cursor: "pointer" }} onClick={() => props.details(props.id,props.name, props.keywords, props.process, props.modal, props.proto)}/>
                    <div className="middle">
                        <button onClick={() => props.details(props.id, props.name, props.keywords, props.process, props.modal, props.proto)} className="cardBtn btn" data-toggle="modal" data-target={props.modal}>More »</button>
                    </div>
                </div>
                <div style={{ height: '245px', overflow: 'hidden', paddingLeft: '1%', paddingRight: '1%' }}>
                    <h3 className="cardh3 font-weight-normal">{props.name}</h3>
                    <p>{props.description}</p>
                    <p className="keysP"><span className="font-weight-bolder">Keywords: </span><cite title="keys">{props.keywords}</cite></p>
                </div>
            </div>
        </>

    )

}

export default ProjectCard
