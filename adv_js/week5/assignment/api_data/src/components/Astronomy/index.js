import React, { useContext } from "react";
import styles from "./Astronomy.module.scss";
import { WeatherDataContext } from "../../context/WeatherDataContext";

const Astronomy = () => {
  const { astroData } = useContext(WeatherDataContext);

  return (
    <div id="astro" className={styles.weatherCont}>
      <h2>Astronomy</h2>
      <hr></hr>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Sunrise</th>
            <th scope="col">Sunset</th>
            <th scope="col">Moonrise</th>
            <th scope="col">Moonset</th>
            <th scope="col">Moon Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{astroData.sunrise}</td>
            <td>{astroData.sunset}</td>
            <td>{astroData.moonrise}</td>
            <td>{astroData.moonset}</td>
            <td>{astroData.moon_phase}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Astronomy;
