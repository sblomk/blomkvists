import React from 'react'
import './ProjectCard.css';

function ProjectCard(props) {

    return (
        <>
            <div className="col-md-4" style={{ padding: '2%' }}>
                <div className="cardImgContainer">
                    <img src={props.imgUrl} className="cardImg latest d-block w-100" alt="" style={{ backgroundColor: "#ebfcf1", cursor: "pointer" }} onClick={() => props.details(props.name, props.fullDescription, props.keywords)}/>
                    <div className="middle">
                        <button onClick={() => props.details(props.name, props.fullDescription, props.keywords)} className="cardBtn btn" data-toggle="modal" data-target=".bd-example-modal-lg">More »</button>
                    </div>
                </div>
                <div style={{ height: '255px', overflow: 'hidden' }}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <p><span className="text-muted font-weight-bolder">Keywords: </span><cite title="keys" className="text-muted">{props.keywords}</cite></p>
                </div>
            </div>

        </>

    )

}

export default ProjectCard
