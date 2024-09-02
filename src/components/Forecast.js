import React, { useState } from 'react';

import './Forecast.css';

const Forecast = ({data}) => {

    // Function to format the temperature from Kelvin to Celsius
    const kelvinToCelsius = (temp) => Math.round(temp - 273.15);
    console.log(data);


    return (
        <div className="forecast">
        <h3>Forecast</h3>
        <div className="forecast-container">
            {data.list.map((forecast, index) => (
                <div key={index} className="forecast-card">
                    
                    <div className="forecast-date">
                        <p>{forecast.dt_txt}</p>
                    </div>
                    <div className="forecast-temp">
                        <h3>{kelvinToCelsius(forecast.main.temp)}°C</h3>
                    </div>
                    <div className="forecast-condition">
                        <p>{forecast.weather[0].description}</p>
                    </div>
                    <div className="forecast-icon">
                        <img
                            alt='weather'
                            className='weatherIcon'
                            src={`icons/${forecast.weather[0].icon}.png`}
                        />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};


export default Forecast;