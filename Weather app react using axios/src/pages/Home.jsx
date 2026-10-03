import { useState } from "react"
import axios from "axios"

const Home = () => {
  const [city, setcity] = useState("")
  const [weather, setWeather] = useState({
    city: "",
    temperature: null,
  })

  const getweather = async (lat, long, cityName) => {

    // fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)

    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
    console.log(response.data)

    setWeather({
      city: cityName,
      temperature: response.data.current_weather.temperature,
    })


  }

  const getlatandlong = async () => {
    if (!city) {
      return alert("Enter a city name")
    }

    // fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)

    const res = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    console.log(res.data)


    if (!res.data.results || res.data.results.length == 0) {
      return alert("City not found")
    }

    let lat = res.data.results[0].latitude
    let long = res.data.results[0].longitude

    getweather(lat, long)

  }

  return (
    <div>
      <header>
        <h1>Weather App</h1>
      </header>

      <div className="searchmenu">

        <input type="search" placeholder="Enter a city name" value={city} onChange={(e) => setcity(e.target.value)} />
        <button className="btn" onClick={getlatandlong}>Get weather</button>
      </div>                                                                                                                                         

      {weather.temperature !== null && (
        <div className="gallery">

          <h2>Temperature of {city} : {weather.temperature}°C</h2>
        </div>
      )}
    </div>
  )
}

export default Home
