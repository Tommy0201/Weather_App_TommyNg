import './weather.css';

function Weather({data}) {
    return (
        <div className="weather-card">
            <div className="main">
                <div className="mainInfo">
                    <div className='location'>
                        <p>{new Date(data.dt * 1000).toDateString()}</p>
                        <p>{data.city}</p>

                    </div>
                    <div className='temperature'>
                        <h1 className='bold'>{Math.round(data.main.temp-273.15)}°C</h1>
                    </div>
                    <div className='condition'>
                        <p>{data.weather[0].description}</p>
                    </div>
                </div>
                <div className='mainIcon'>
                    <img alt='weather' className='weatherIcon' src={`icons/${data.weather[0].icon}.png`}/>
                </div>
            </div>
            <div className='description'>
                <div className="feels-like">
                    <p className='bold'>{Math.round(data.main.feels_like-273.15)}°C</p>
                    <p>Feels like</p>
                </div>
                <div className="wind">
                    <p className='bold'>{data.wind.speed} m/s</p>
                    <p>Wind Speed</p>
                </div>
                <div className="humidity">
                    <p className='bold'>{data.main.humidity}%</p>
                    <p>Humidity</p>
                </div>
                <div className="range">
                    <p className='bold'>{Math.round(data.main.temp_min-273.15)}-{Math.round(data.main.temp_max-273.15)}°C</p>
                    <p>Range</p>
                </div>
            </div>
        </div>
    
      );
}


export default Weather;