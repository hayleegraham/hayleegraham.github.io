import React, { useEffect, useState } from "react";
import "./App.css";
import Component from "./apiDemo";

const App = () => {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    const requestData = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response)
        .catch(() => console.log("error"));

      const dogPics = await response.json();
      setApiData(dogPics)
      console.log(dogPics.message)
    };
    requestData();
  }, []);
  return (
    <>
      <img src={apiData.message}></img>
      <Component/>
    </>
  );
};

export default App;
