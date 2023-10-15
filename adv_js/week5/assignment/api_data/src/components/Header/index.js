import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import locData from "../CurrentWeather"


const Header = ()=> {
    return(
        <nav>
            <div className={styles.navCont}>
                <div className={styles.title}>
                    <h1>{`Weather - ${locData.name}`}</h1>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="#test">Current</a></li>
                
                </ul>
            </div>
        </nav>
    )
    
}

export default Header;