import React from 'react'

function ProjectCollapse(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">{props.name}</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
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
                </div>
        )
}

export default ProjectCollapse
