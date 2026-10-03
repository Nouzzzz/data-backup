import { useState } from "react";

const Home = () => {

  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  function getweather(lat, long) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather Data:", data);
        setWeather(data.current_weather); 
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  function getlatandlong() {
    if (!cityName) return alert("Please enter a city name");
    
    setLoading(true);
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Geocoding Data:", data);
        
        if (data.results && data.results.length > 0) {
          let lat = data.results[0].latitude;
          let long = data.results[0].longitude;
          console.log(lat, long);
          getweather(lat, long);
        } else {
          alert("City not found");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  return (
    <div>
      <header>
        <h1>Weather App</h1>
      </header>

      <div className="searchmenu">
       
        <input 
          type="search" 
          placeholder="Enter a city name" 
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button className="btn" onClick={getlatandlong} disabled={loading}>
          {loading ? "Loading..." : "Get weather"}
        </button>
      </div>

  
      {weather && (
        <div className="weather-display">
          <h3>Current Weather</h3>
          <p>Temperature: <strong>{weather.temperature}°C</strong></p>
          <p>Wind Speed: <strong>{weather.windspeed} km/h</strong></p>
        </div>
      )}
    </div>
  );
};

export default Home;
