import React from 'react'

function ProjectCollapse(props) {
        if(props.collapseShow === false){
            return (
                <div className="col-md-12" id={props.id}></div>
            )
        } else{
            return (
                <div className="col-md-12" id={props.id}>
                    <div className="card card-body">
                        <div className="container">
                            <button type="button" className="close" aria-label="Close" onClick={() => props.closeCollapse()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h3>{props.name}</h3>
                            <hr></hr>
                            <h5>Description</h5>
                            <p>{props.fullDescription}</p>
                            <br></br>
                            <h5>What I learned</h5>
                            <p>I learned things about blalal and experienced balalal when implementing blalal</p>
                            <br></br>
                            <p><span className="font-weight-bolder">Keywords: </span><cite title="keys">{props.keywords}</cite></p>
                        </div>
                    </div>
                </div>
            )
        }
}

export default ProjectCollapse
