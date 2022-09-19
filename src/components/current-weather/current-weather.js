import "./current-weather.css"

const CurrentWeather = ({data}) => {
  return (
      <div className="weather-container">
        <div className="top">
          <div>
            <p className="city">Barcelona</p>
            <p className="weather-description">Sunny</p>
          </div>
          <img alt="" className="weather-icons" src="icons/01d.png" />
        </div>
        <div className="bottom">
          <p className="temperature">18°C</p>
          <div className="weather-details">
            <div className="parameter-row">
              <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels Like</span>
              <span className="parameter-value">22°C</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">22 m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">15%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">15hPa</span>
            </div>
          </div>
        </div>
        
      </div>
  )  ;

}

export default CurrentWeather;