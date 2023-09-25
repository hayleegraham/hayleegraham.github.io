import React, { useEffect, useState } from "react";
import styles from "./WeatherDisplay.module.scss";

const WeatherDisplay = () => {
  const [apiData, setApiData] = useState({});
  const [weatherData, setWeatherData] = useState({ description: "" });

  const weatherDesc = {
    "smoke": "https://video-images.vice.com/videos/5acd04aaf1cdb35440081cc1/lede/1523982434316-smokeables_2018_chip_can_bong-clean.jpeg",
    "few clouds": "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_gq.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1491952193/gq_blowing-smoke-with-a-vape-god.jpg"
}
  const ifExists = (desc)=> {
    
    const weatherKeys = Object.keys(weatherDesc)
    const exists = weatherKeys.some((key)=>{
        return key == desc
    })
    return exists
    
  }
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

          {ifExists(weatherData.description) && (
            <img src={weatherDesc[weatherData.description]}></img>
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
