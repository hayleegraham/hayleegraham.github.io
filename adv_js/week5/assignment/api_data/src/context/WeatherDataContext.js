import { createContext, useState, useEffect } from "react";

export const WeatherDataContext = createContext(null);

const WeatherContextProvider = ({ children }) => {
  const [locData, setLocData] = useState({});
  const [curWeatherData, setCurWeatherData] = useState({});
  const [marineDayData, setMarineDayData] = useState({});
  const [tideData, setTideData] = useState({});
  const [astroData, setAstroData] = useState({});

  const requestData = async (api, q) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1${api}?q=${q}&key=9d715acb554243cebba192902231310`
    )
      .then((response) => response)
      .catch(() => false);

    const data = await response.json();
    if (data?.error) return false;
    return data;
  };
  const getWeatherData = async (location) => {
    const currentWeatherData = await requestData("/current.json", location);
    if (!currentWeatherData) return;
    setLocData(currentWeatherData.location);
    setCurWeatherData(currentWeatherData.current);

    const marineData = await requestData("/marine.json", location);
    setMarineDayData(marineData.forecast.forecastday[0]);
    setTideData(marineData.forecast.forecastday[0].day.tides[0]);

    const astronomyData = await requestData("/astronomy.json", location);
    setAstroData(astronomyData.astronomy.astro);
  };
  const updateData = (newVal) => {
    getWeatherData(newVal);
  };

  useEffect(() => {
    const init = async () => {
      const ipLoc = await requestData("/current.json", "auto:ip");
      getWeatherData(ipLoc.location.name);
    };
    init();
  }, []);

  const contextValue = {
    curWeatherData,
    locData,
    marineDayData,
    tideData,
    astroData,
    updateData,
  };
  return (
    <WeatherDataContext.Provider value={contextValue}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherContextProvider;
