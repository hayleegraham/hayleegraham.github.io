import React from "react";
import { NavLink } from 'react-router-dom'

class NavLinks extends React.Component {
    render(){
        return(
            <ul className="nav navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        )
    }
}

export default NavLinks;