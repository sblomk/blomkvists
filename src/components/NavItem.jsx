import React, { Component } from 'react'

export default class NavItem extends Component {
    constructor(props) {
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
          <li>
            <a href={'#' + this.props.itemName} onClick={this.handleClick} aria-label={'Scroll to ' + this.props.itemName}>
              {this.props.itemName}
            </a>
          </li>
        );
      }
    }
