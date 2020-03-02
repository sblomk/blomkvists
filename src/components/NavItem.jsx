import React, { Component } from 'react'

export default class NavItem extends Component {
    constructor() {
        super();
        this.anchorTarget = null;
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(e) {
        e.preventDefault();
        this.anchorTarget.scrollIntoView({behavior:"smooth", block:"start"});
      }
      
      componentDidMount() {
        this.anchorTarget = document.getElementById(this.props.itemName);
      }

      
      render() {
        return (
          <li className="nav-item">
            <a className="nav-link" href={'#' + this.props.itemName} onClick={this.handleClick} aria-label={'Scroll to ' + this.props.itemName} style={this.props.active ? {borderBottom: "2px solid #1d4382", fontWeight: "500"}:{borderBottom: "2px solid white"}}>
              {this.props.itemName === "About" ? this.props.itemName+" me" : this.props.itemName}
            </a>
          </li>
        );
      }
    }
