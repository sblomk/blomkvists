import React from 'react'
import './ProjectCard.css';

function ProjectCard(props) {

    return (
        <>
            <div className="projectCard col-md-5" style={{ padding: '2%' }}>
                <div className="cardImgContainer">
                    <img src={props.imgUrl} className="cardImg latest d-block w-100" alt="" style={{ backgroundColor: "#ebfcf1", cursor: "pointer" }} onClick={() => props.details(props.name, props.fullDescription, props.keywords, props.process, props.brief)}/>
                    <div className="middle">
                        <button onClick={() => props.details(props.name, props.fullDescription, props.keywords, props.process, props.brief)} className="cardBtn btn" data-toggle="modal" data-target=".bd-example-modal-lg">More »</button>
                    </div>
                </div>
                <div style={{ height: '245px', overflow: 'hidden', paddingLeft: '1%', paddingRight: '1%' }}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <p className="keysP"><span className="font-weight-bolder">Keywords: </span><cite title="keys">{props.keywords}</cite></p>
                </div>
            </div>

        </>

    )

}

export default ProjectCard
