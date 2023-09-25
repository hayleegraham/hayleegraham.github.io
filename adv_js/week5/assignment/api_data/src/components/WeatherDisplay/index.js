import React, { useEffect, useState } from "react";
import styles from "./WeatherDisplay.module.scss";

const WeatherDisplay = () => {
  const [apiData, setApiData] = useState({});
  const [weatherData, setWeatherData] = useState({ description: "" });

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch("https://mm214.com/demo.php")
        .then((response) => response)
        .catch(() => false);
      if (!response) return;

      const data = await response.json();
      setApiData(data);
      setWeatherData(data.weather[0]);
      console.log(data);
    };
    requestData();
  }, []);

  return (
    <div>
      {Object.keys(apiData).length ? (
        <div className={styles.weatherCont}>
          <h1>{`${apiData.name} Weather`}</h1>
          <p>{`Weather Description: ${weatherData.description}`}</p>

          {weatherData.description == "smoke" && (
            <img src="https://video-images.vice.com/videos/5acd04aaf1cdb35440081cc1/lede/1523982434316-smokeables_2018_chip_can_bong-clean.jpeg"></img>
          )}
          <p>{`Temp: ${apiData.main.temp}`}</p>
          <div className={styles.humidity}>{`Humidity: ${apiData.main.humidity}%`}<div style={{"--bg-width": `${apiData.main.humidity}%`}} className={styles.humidityBar}><div></div></div></div>
          <p>{`Feels Like: ${apiData.main.feels_like}`}</p>
          <p>{`Wind Speed: ${apiData.wind.speed} mph`}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default WeatherDisplay;
