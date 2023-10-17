import React, { useContext, useRef } from "react";
import styles from "./Header.module.scss";
import { WeatherDataContext } from "../../context/WeatherDataContext";

const Header = () => {
  const searchInputRef = useRef(null);
  const { locData, updateData } = useContext(WeatherDataContext);
  const changeLoc = () => {
    updateData(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className={`${styles.navCont} container-fluid`}>
        <div className={`${styles.title} navbar-brand`}>
          <h1>
            Weather{" "}
            <span className="fs-2">
              - {locData.name}, {locData.region}
            </span>
          </h1>
        </div>
        <ul className={`${styles.linksCont} navbar-nav ms-5 mb-2 mb-lg-0`}>
          <li className="nav-item me-3">
            <a className="nav-link fs-5" href="#current">
              Current
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link fs-5" href="#hourly">
              Hourly
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link fs-5" href="#tides">
              Tides
            </a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link fs-5" href="#astro">
              Astronomy
            </a>
          </li>
        </ul>
        <div className={`${styles.searchCont} d-flex`}>
          <input
            className="form-control me-2"
            type="search"
            ref={searchInputRef}
            placeholder="Enter City or Zip Code"
          />
          <button className="btn btn-secondary" onClick={changeLoc}>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
