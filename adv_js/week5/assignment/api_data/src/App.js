import './App.css';
import { Routes, Route } from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';

const App = ()=> {
  return (
    <>
    <Header/>
    <CurrentWeather/>
    </>
  )
}

export default App;
