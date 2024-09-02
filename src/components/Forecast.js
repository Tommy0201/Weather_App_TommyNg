import React, { useState } from 'react';

import './Forecast.css';

const Forecast = ({data}) => {

    const getDateString = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    };

    const kelvinToCelsius = (temp) => Math.round(temp - 273.15);

    const getCurrentDate = () => new Date().toISOString().split('T')[0];

    const groupByDate = (list) => {
        const groupedData = {};

        list.forEach((forecast) => {
            const date = getDateString(forecast.dt);

            if (!groupedData[date]) {
                groupedData[date] = {
                    count: 0,
                    tempSum: 0,
                    weather: [],
                    icon: forecast.weather[0].icon
                };
            }

            groupedData[date].count++;
            groupedData[date].tempSum += forecast.main.temp;
            groupedData[date].weather.push(forecast.weather[0].description);
        });

        return Object.keys(groupedData).map((date) => ({
            date,
            averageTemp: kelvinToCelsius(groupedData[date].tempSum / groupedData[date].count),
            description: groupedData[date].weather[0], // Taking the first description for simplicity
            icon: groupedData[date].icon
        }));
    };

    const filteredForecasts = groupByDate(data.list).filter(
        (forecast) => forecast.date !== getCurrentDate()
    );

    return (
        <div className="forecast">
        <h3>Forecast</h3>
        <div className="forecast-container">
            {filteredForecasts.map((forecast, index) => (
                <div key={index} className="forecast-card">

                    <div className="forecast-date">
                        <p>{forecast.date}</p>
                    </div>
                    <div className="forecast-temp">
                        <h3>{forecast.averageTemp}°C</h3>
                    </div>
                    <div className="forecast-condition">
                        <p>{forecast.description}</p>
                    </div>
                    <div className="forecast-icon">
                        <img
                            alt='weather'
                            className='weatherIcon'
                            src={`icons/${forecast.icon}.png`}
                        />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};


export default Forecast;