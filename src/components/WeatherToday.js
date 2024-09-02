import './weather.css';

function Weather() {
    return (
        <div className="weather-card">
            <div className="main">
                <div className="mainInfo">
                <div className='location'>
                    <p>Hanoi</p>
                </div>
                <div className='temperature'>
                    <h1 className='bold'>26C</h1>
                </div>
                <div className='condition'>
                    <p>Sunny</p>
                </div>
                </div>
                <div className='mainIcon'>
                <img alt='weather' className='weatherIcon' src='icons/01d.png'/>
                </div>
            </div>
            <div className='description'>
                <div className="feels-like">
                    <p className='bold'>32 C</p>
                    <p>Feels like</p>
                </div>
                <div className="wind">
                    <p className='bold'>20 MPH</p>
                    <p>Wind Speed</p>
                </div>
                <div className="humidity">
                    <p className='bold'>30%</p>
                    <p>Humidity</p>
                </div>
            </div>
        </div>
    
      );
}


export default Weather;