import React, { Component } from 'react';
import './Jumbotron.css';


export class Jumbotron extends Component {
    render() {
        return (
            <div className="jumboContainer">
                <div className="jumbotron">
                    <div style={{height: '360px'}}></div>
                    <div className="headline">
                        <h1>{this.props.title}</h1>
                    </div>

                </div>
            </div>
        )
    }
}

export default Jumbotron
