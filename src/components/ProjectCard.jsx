import React from 'react'

function ProjectCard(props) {

    return (
        <div className="col-md-4">
            <img src={props.imgUrl} className="latest d-block w-100" alt=""/>
            <div style={{ height: '230px', overflow: 'hidden' }}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <p><a className="btn btn-secondary" href="/projects" role="button">View details »</a></p>
        </div>
    )

}

export default ProjectCard
