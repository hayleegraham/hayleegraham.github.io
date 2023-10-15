import React, { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
  const [locData, setLocData] = useState({});
  const [curWeatherData, setCurWeatherData] = useState({});
  const [marineDayData, setMarineDayData] = useState({});

  useEffect(() => {
    const requestData = async (api, q) => {

      const response = await fetch(`http://api.weatherapi.com/v1${api}?q=${q}&key=9d715acb554243cebba192902231310`)
        .then((response) => response)
        .catch(() => false);

      if (!response) return false;

      const data = await response.json();
      console.log(api, q, data);
      return data
      
    };

    const initData = async ()=> {
      const currentWeatherData = await requestData("/current.json", "San Diego");
      setLocData(currentWeatherData.location);
      setCurWeatherData(currentWeatherData.current);

      const marineData = await requestData("/marine.json", "San Diego");
      setMarineDayData(marineData.forecast.forecastday[0])
      

    }
    initData();
  }, []);

  return (
    <div>
      {
        <div className={styles.weatherCont}>
          <div className={styles.headerCont}>
            <h1>Current Weather</h1>
            <div className={styles.conditionCont}>
              <img src={curWeatherData?.condition?.icon} alt="Weather Condition Icon"></img>
              <p>{curWeatherData?.condition?.text}</p>
            </div>
          </div>
          <div className={styles.Ps}>
            <div className={styles.pLeft}>
              <p>{`Temp: ${curWeatherData.temp_f}`}&deg;F</p>
              <p>{`Feels Like: ${curWeatherData.feelslike_f}`}&deg;F</p>
              <p>{`UV-Index: ${curWeatherData.uv}`}</p>
            </div>
            <div className={styles.pCenter}>
              <p>{`Wind: ${curWeatherData.wind_dir} ${curWeatherData.wind_mph} mph`}</p>
              <p>{`Gust: ${curWeatherData.gust_mph} mph`}</p>
              <p>{`Visibility: ${curWeatherData.vis_miles} mi`}</p>
            </div>
            <div className={styles.pRight}> 
              <div className={styles.humidity}>{`Humidity: ${curWeatherData.humidity}%`}<div style={{"--bg-width": `${curWeatherData.humidity}%`}} className={styles.humidityBar}><div></div></div></div>
              <p>{`Pressure: ${curWeatherData.pressure_in} in`}</p>
              <p>{`Rain: ${curWeatherData.precip_in} in`}</p>
            </div>
          </div>
          
        </div>
      
      }
      <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div id="test">Something</div>
    </div>
  );
};

export default CurrentWeather;
