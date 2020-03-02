import React, { Component } from 'react'

export default class NavHeader extends Component {
    constructor() {
        super();
        this.anchorTarget = null;
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
        e.preventDefault();
        this.anchorTarget.scrollIntoView({behavior:"smooth", block:"start", top: -100});
      }
      
      componentDidMount() {
        this.anchorTarget = document.getElementById("top");
      }

      
      render() {
        return (
          <a className="nav-link" href="#top" onClick={this.handleClick} aria-label={'Scroll to Home'} id="HeaderText">
            <h4>Sebastian<br/>Blomkvist</h4>
          </a>
        );
      }
    }
