import React from "react";
import Header from "./Header";
import NavLinks from "./NavLinks"

class Nav extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Header/>
                    <NavLinks/>
                </div>
            </nav>
        )
    }
}

export default Nav;