import React from "react";
import { NavLink } from 'react-router-dom'

class NavLinks extends React.Component {
    render(){
        return(
            <ul class="nav navbar-nav">
                <li><NavLink to="/home">Home</NavLink></li>
                {/* <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li> */}
            </ul>
        )
    }
}

export default NavLinks;