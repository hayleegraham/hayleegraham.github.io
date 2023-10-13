import React, { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
  const [locData, setLocData] = useState({});
  const [curWeatherData, setCurWeatherData] = useState({});

  useEffect(() => {
    const requestData = async () => {
      const api = '/current.json'
      const q = 'San Diego'
      const response = await fetch(`http://api.weatherapi.com/v1${api}?q=${q}&key=9d715acb554243cebba192902231310`)
        .then((response) => response)
        .catch(() => false);
      if (!response) return;

      const data = await response.json();
      setLocData(data.location);
      setCurWeatherData(data.current);
      console.log(data.current);

      
    };
    requestData();
  }, []);

  return (
    <div>
      {
        <div className={styles.weatherCont}>
          <h1>{`Current Weather - ${locData.name}`}</h1>
          <img src={curWeatherData?.condition?.icon}></img>
          <div className={styles.pLeft}>
            <p>{`Weather Description: ${curWeatherData?.condition?.text}`}</p>
            <p>{`Temp: ${curWeatherData.temp_f}`}</p>
            <div className={styles.humidity}>{`Humidity: ${curWeatherData.humidity}%`}<div style={{"--bg-width": `${curWeatherData.humidity}%`}} className={styles.humidityBar}><div></div></div></div>
            <p>{`Feels Like: ${curWeatherData.feelslike_f}`}</p>
            <p>{`Wind Speed: ${curWeatherData.wind_mph} mph`}</p>
          </div>
          <div className={styles.pRight}> 
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      
      }
    </div>
  );
};

export default CurrentWeather;
