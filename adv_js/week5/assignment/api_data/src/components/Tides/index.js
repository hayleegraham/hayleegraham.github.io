import React, { useContext } from "react";
import styles from "./Tides.module.scss";
import moment from "moment";
import { WeatherDataContext } from "../../context/WeatherDataContext";

const Tides = () => {
  const { tideData } = useContext(WeatherDataContext);
  const formatDate = (date) => {
    return moment(new Date(date)).format("LT");
  };
  return (
    <div id="tides" className={styles.weatherCont}>
      <h2>Tides</h2>
      <hr></hr>
      <table className="table table-sm table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
            <th scope="col">Tide Height</th>
          </tr>
        </thead>
        <tbody>
          {tideData?.tide?.map((tides, index) => {
            return (
              <tr key={index}>
                <th scope="row">{formatDate(tides.tide_time)}</th>
                <td>{tides.tide_type}</td>
                <td>{tides.tide_height_mt} meters</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tides;
