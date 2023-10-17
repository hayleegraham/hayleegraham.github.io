import React, { useContext } from "react";
import styles from "./CurrentWeather.module.scss";
import { WeatherDataContext } from "../../context/WeatherDataContext";

const CurrentWeather = () => {
  const { curWeatherData } = useContext(WeatherDataContext);

  return (
    <div id="current" className={styles.weatherCont}>
      <div className={styles.headerCont}>
        <h2>Current Weather</h2>
        <div className={styles.conditionCont}>
          <img
            src={curWeatherData?.condition?.icon}
            alt="Weather Condition Icon"
          ></img>
          <p>{curWeatherData?.condition?.text}</p>
        </div>
      </div>
      <hr></hr>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">Temp</th>
            <td>{curWeatherData.temp_f}&deg;F</td>
            <th scope="row">Wind</th>
            <td>
              {curWeatherData.wind_dir} {curWeatherData.wind_mph} mph
            </td>
            <th scope="row">Humidity</th>
            <td>{curWeatherData.humidity}%</td>
          </tr>

          <tr>
            <th scope="row">Feels Like</th>
            <td>{curWeatherData.feelslike_f}&deg;F</td>
            <th scope="row">Gusts</th>
            <td>{curWeatherData.gust_mph} mph</td>
            <th scope="row">Pressure</th>
            <td>{curWeatherData.pressure_in} in</td>
          </tr>

          <tr>
            <th scope="row">UV-Index</th>
            <td>{curWeatherData.uv}&deg;F</td>
            <th scope="row">Visibility</th>
            <td>{curWeatherData.vis_mile} miles</td>
            <th scope="row">Rain</th>
            <td>{curWeatherData.precip_in} in</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrentWeather;
