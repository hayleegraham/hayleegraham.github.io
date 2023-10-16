import React, { useEffect, useState,useContext } from "react";
import styles from "./Header.module.scss";
import { WeatherContext } from "../../context/WeatherContext";


const Header = ()=> {
    const {updateData} = useContext(WeatherContext);
    const clicked = ()=>{
        updateData('testing')
    }
    return(
        <nav>
            <div className={styles.navCont}>
                <div className={styles.title}>
                    <h1 onClick={clicked}>Weather App</h1>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="#test">Current</a></li>
                
                </ul>
            </div>
        </nav>
    )
    
}

export default Header;