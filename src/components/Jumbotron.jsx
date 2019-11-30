import React from 'react';
import './Jumbotron.css';


function Jumbotron(props) {
        return (
            <div className="jumboContainer">
                <div className="jumbotron">
                    <div style={{height: '200px'}}></div>
                    <div className="headline">
                        <h1>{props.title}</h1>
                    </div>

                </div>
            </div>
        )
}

export default Jumbotron
