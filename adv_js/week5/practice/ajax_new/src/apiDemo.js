import React, { useEffect, useState } from "react";
import "./App.css";

const Component = () => {
  const [apiData, setApiData] = useState({});
  const [weatherData, setWeatherData] = useState({description: ""});
  useEffect(() => {
    const requestData = async () => {
      const response = await fetch("https://mm214.com/demo.php")
        .then((response) => response)
        .catch((error) => false);
        if(!response) return

      const dogPics = await response.json();
      setApiData(dogPics)
      setWeatherData(dogPics.weather[0])
      console.log(dogPics)
    };
    requestData();
  }, []);


  useEffect(()=>{
    console.log("logging data", apiData)
  }, [apiData])

return (
    <>
     <p>{weatherData.description}</p>
     <p>{apiData.name}</p>
     <p>{apiData.main?.temp}</p>
     <p>{apiData.weather?.length ? apiData.weather[0].description : ""}</p>
     {
        Object.keys(apiData).length ?
        (<p>{apiData.weather[0].description}</p>)
        :
        (<p></p>)
     }
    </>
  );
};

export default Component;
