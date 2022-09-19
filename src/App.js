import './App.css';
import Search from './components/search/search';
import CurrentWeathers from './components/current-weather/current-weather.js';
import { weatherAPIUrl , Weather_ApiKey } from './api';
import { useState } from 'react'

function App() {

  const [CurrentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");


    const fetchCurrentWeather = fetch(`${weatherAPIUrl}/weather?lat=${lat}&lon=${lon}&appid=${Weather_ApiKey}`);
    const forecastFetch = fetch(`${weatherAPIUrl}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_ApiKey}`);

    Promise.all([fetchCurrentWeather, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }

  console.log(CurrentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnChange} />
      <CurrentWeathers />
    </div>
  );
}
  

export default App;
