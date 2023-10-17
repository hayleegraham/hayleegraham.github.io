import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherContextProvider from './context/WeatherDataContext';
import CurrentWeather from './components/CurrentWeather';
import Header from './components/Header';
import HourlyWeather from './components/HourlyWeather';
import Tides from './components/Tides';
import Astronomy from './components/Astronomy';
import Footer from './components/Footer';

const App = ()=> {
  return (
    <>
    <WeatherContextProvider>
      <Header/>
      <CurrentWeather/>
      <HourlyWeather/>
      <Tides/>
      <Astronomy/>
    </WeatherContextProvider>
      <Footer/>
    </>
  )
}

export default App;
