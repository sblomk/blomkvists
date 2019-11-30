import React from 'react'

function ProjectCard(props) {

    return (
        <div className="col-md-4" style={{ padding: '2%' }}>
            <img src={props.imgUrl} className="latest d-block w-100" alt="" style={{ backgroundColor: "#c9d0d4" }}/>
            <div style={{ height: '255px', overflow: 'hidden' }}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p><span className="text-muted font-weight-bolder">Keywords: </span><cite title="keys" className="text-muted">{props.keywords}</cite></p>
            </div>
            <p><a className="btn btn-secondary" href="/projects" role="button">View details »</a></p>
        </div>
    )

}

export default ProjectCard
