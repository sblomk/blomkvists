import React, { Component } from 'react'
import './Navbar.css';
import NavItem from './NavItem.jsx'
import NavHeader from './NavHeader.jsx'

export class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            activeMenuItem: {
              top: '',
              Projects: '',
              About: ''
            }
        }

        this.sectionTopValue = {
          Projects: 0,
          About: 0
        }
    } 

    handleScroll() {
        const curPos = window.scrollY + 20
        let curSection = ""
        
        /* From bottom to top, determine which section we're in */
        
        if(curPos > this.sectionTopValue.About) {
          curSection = 'About'
        } else if(curPos > this.sectionTopValue.Projects) {
          curSection = 'Projects'
        } else {
          curSection = 'top'
        }
        /* If we actually need to change active sections */
        
        if(this.state.activeMenuItem[curSection] !== "active") {            
        
          /* Set all sections to inactive */
        
          const newMenuState = {
            top: '',
            Projects: '',
            About: ''
          }
          /* Set the newly active state to active */
          newMenuState[curSection] = "active";
          /* Update state, causing re-render */
          this.setState({ activeMenuItem: newMenuState });
        }
    }

    getAnchorPoints() {
        const curScroll = window.scrollY;
        for(var key in this.sectionTopValue) {     
            this.sectionTopValue[key] =
             document.getElementById(key).getBoundingClientRect().top + curScroll;
        }
        
        /* Get the pixel height of the viewport */
        
        const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        
        /* Get the pixel-depth of the bottom of the page */
        
        const bottom = document.body.offsetHeight;
        
        /* If max-scroll is less than the pixel-depth of last section, then adjust the pixel-depth of last section to be 
        50px higher than max scroll depth ... allowing it to be an active destination */
        
        if(viewPortHeight > (bottom - this.sectionTopValue.About)) {
          this.sectionTopValue.About = bottom - viewPortHeight - 50;
        }
        this.handleScroll();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        /* When window resizes, get new scroll-depth positions of anchors */
        
        window.addEventListener('resize', this.getAnchorPoints.bind(this));
    }


    componentDidUpdate() {
        this.getAnchorPoints()
    }
    render() {
        const navItems = [];
        for(var key in this.sectionTopValue) {
            /* We now send a prop indicating active status of the item */
            navItems.push(<NavItem key={key} itemName={key} active={this.state.activeMenuItem[key]} />
        )
    }
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                <div className="container">
                <div className="blomtainer">
                    <NavHeader key="Home" itemName="Home"/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="div-inline my-2 my-lg-0">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    {navItems}
                    </ul>
                </div>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
