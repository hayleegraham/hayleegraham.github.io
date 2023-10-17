import React, { useContext } from "react";
import styles from "./HourlyWeather.module.scss";
import moment from "moment";
import { WeatherDataContext } from "../../context/WeatherDataContext";

const HourlyWeather = () => {
  const { marineDayData } = useContext(WeatherDataContext);
  const formatDate = (date) => {
    return moment(new Date(date)).format("LT");
  };
  return (
    <>
      <div id="hourly" className={styles.weatherCont}>
        <h2>Hourly Weather</h2>
        <hr></hr>
        <table className="table table-sm table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Condition</th>
              <th scope="col">Temp</th>
              <th scope="col">Humidity</th>
              <th scope="col">Wind</th>
              <th scope="col">Rain</th>
            </tr>
          </thead>
          <tbody>
            {marineDayData?.hour?.map((hourly, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{formatDate(hourly.time)}</th>
                  <td>{hourly.condition.text}</td>
                  <td>{hourly.temp_f}&deg;F</td>
                  <td>{hourly.humidity}%</td>
                  <td>{hourly.wind_mph} mph</td>
                  <td>{hourly.precip_in} in</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HourlyWeather;
