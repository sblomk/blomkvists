import React from 'react'

function ProjectCard(props) {

    return (
            <div className="col-md-4" style={{ padding: '2%' }}>
                <img src={props.imgUrl} className="latest d-block w-100" alt="" style={{ backgroundColor: "#ebfcf1", cursor: "pointer" }} onClick={() => props.details(props.name, props.fullDescription, props.keywords)}/>
                <div style={{ height: '255px', overflow: 'hidden' }}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <p><span className="text-muted font-weight-bolder">Keywords: </span><cite title="keys" className="text-muted">{props.keywords}</cite></p>
                </div>
                <p><button onClick={() => props.details(props.name, props.fullDescription, props.keywords)} className="btn btn-secondary">View details »</button></p>
            </div>
    )

}

export default ProjectCard
