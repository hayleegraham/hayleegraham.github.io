
import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render(){
        return(
            <div className="navbar-header">
                <NavLink to="/"><p className="navbar-brand">Haylee's Website</p></NavLink>
            </div>
        )
    }
}

export default Header;