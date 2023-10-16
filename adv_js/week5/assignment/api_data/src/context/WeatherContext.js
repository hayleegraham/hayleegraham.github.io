import { createContext, useContext, useState } from 'react';

export const WeatherContext = createContext(null);

export const test = ()=>{
    console.log("TESTING IMPORTS")
}

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState('haylee');

    const updateData = (newval)=>{
        setWeatherData(newval)
    }

    const contextValue = {
        weatherData,
        updateData,
    };
    return (
        <WeatherContext.Provider value={contextValue}>
            {children}
        </WeatherContext.Provider>
    )
}
export default WeatherProvider;