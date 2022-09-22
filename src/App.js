import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather.js';
import Forecast from './components/forecast/forecast';
import { weatherAPIUrl , Weather_ApiKey } from './api';
import { useState } from 'react'


function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");


    const fetchCurrentWeather = fetch(`${weatherAPIUrl}/weather?lat=${lat}&lon=${lon}&appid=${Weather_ApiKey}&units=metric`);
    const forecastFetch = fetch(`${weatherAPIUrl}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_ApiKey}&units=metric`);

    Promise.all([fetchCurrentWeather, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }


  return (
    <div className="container">
      <Search onSearchChange={handleOnChange} />
      { currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}
  

export default App;
