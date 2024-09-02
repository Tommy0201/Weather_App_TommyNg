import './App.css';

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Weather from './components/WeatherToday';
import Forecast from './components/Forecast';



const App = () => {

  const [current,setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null); 

  const weather_url = "https://api.openweathermap.org/data/2.5"
  const weather_api_key = "370712cdc0a675147ef753cad5a39ab8 "

  const handleSearchChange = (searchData) => {
    // console.log(searchData);
    const [latitude, longitude] = searchData.value.split(" ");
    const currentFetch = fetch(`${weather_url}/weather?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}`);
    const forecastFetch = fetch(`${weather_url}/forecast?lat=${latitude}&lon=${longitude}&appid=${weather_api_key}`);

    Promise.all([currentFetch,forecastFetch])
    .then(async (response) => {
      const currentResult = await response[0].json();
      const forecastResult = await response[1].json();
      setCurrent({city: searchData.label, ...currentResult});
      setForecast({city: searchData.label, ...forecastResult})
    })
    .catch((err) => console.log(err));
  };


  console.log(current);
  // console.log(forecast);

  
  return (
    <div className="app">
      <div className = "container">
        <SearchBar onSearchChange={handleSearchChange} />
        {current && <Weather data={current}/>}
        {forecast && <Forecast data={forecast}/>}
      </div>
    </div>
  );
}

export default App;
