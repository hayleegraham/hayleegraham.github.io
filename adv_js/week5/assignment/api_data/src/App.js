import './App.css';
import { Routes, Route } from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import WeatherContextProvider from './context/WeatherContext';

const App = () => {
  test()
  return (
    <>
      <WeatherContextProvider>
        <Header />
        <CurrentWeather />
      </WeatherContextProvider>
    </>
  )
}

export default App;
