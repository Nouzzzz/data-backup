import { useState } from "react"

const Home = () => {

 function getweather(lat, long) {

    
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            let condition = data.current_weather.temperature;

 })
 }

function getlatandlong() {

    getweather()

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city.value}&count=1`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            let lat = data.results[0].latitude
            let long = data.results[0].longitude

            console.log(lat, long)
            getweather(lat, long)
        })
}



  return (
    <div>
       <header>
        <h1>Weather App</h1>
       </header>
    
      <div className="searchmenu">
    <input type="search" placeholder="Enter a city name" ></input>
    <button className="btn" onClick={getlatandlong}>Get weather</button>
    </div>
      
    </div>
  )
}

export default Home
