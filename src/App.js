import { useState, useEffect } from 'react';
import './App.css';
import {WiStrongWind} from "react-icons/wi";
import {WiHumidity} from "react-icons/wi";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import {WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloud, WiCloudy, WiNightAltCloudyHigh, WiDayHail, WiNightAltHail, WiDayRain, WiNightRain, WiDayLightning, WiNightLightning, WiDaySnow, WiNightAltSnow, WiDayFog, WiNightFog} from "react-icons/wi"

function App() {
  let time = new Date().getHours();
  const [inputValue, setInputVal] = useState("Leipzig");
  const [weather, setWeather] = useState({
    feelsLike:"23",
    icon:"01d",
    humidity: 80,
    temperature: 25,
    minTemp: 24,
    maxTemp:27,
    wind:3.1,
    press: 102,
    weat: "rainy",
    name: "Berlin"
  });

  const weatherIcons = {
    "01d": <WiDaySunny/>,
    "01n": <WiNightClear/>,
    "02d": <WiDayCloudy/>,
    "02n": <WiNightAltCloudy/>,
    "03d": <WiCloud/>,
    "03n": <WiCloud/>,
    "04d": <WiCloudy/>,
    "04n": <WiNightAltCloudyHigh/>,
    "09d": <WiDayHail/>,
    "09n": <WiNightAltHail/>,
    "10d": <WiDayRain/>,
    "10n": <WiNightRain/>,
    "11d": <WiDayLightning/>,
    "11n": <WiNightLightning/>,
    "13d": <WiDaySnow/>,
    "13n": <WiNightAltSnow/>,
    "50d": <WiDayFog/>,
    "50n": <WiNightFog/>
  }

  const getInputValue = (e) => {
    setInputVal(e.target.value);
  }

  //console.log(process.env)
  const getWeatherInfo = () => {
    console.log(inputValue);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(response => response.json())
    .then(result => {
      if(result.cod !== 200){
        alert(result.message)
      }else{
        console.log(result)
        setWeather({
          feelsLike:result.main.feels_like,
          icon:result.weather[0].icon,
          humidity: result.main.humidity,
          temperature: result.main.temp,
          minTemp: result.main.temp_min,
          maxTemp:result.main.temp_max,
          wind:result.wind.speed,
          press: result.main.pressure,
          weat: result.weather[0].main,
          name: result.name
        })

      }
    })
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Leipzig&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(response => response.json())
    .then(result => {
      if(result.cod !== 200){
        alert(result.message)
      }else{
        console.log(result)
        setWeather({
          feelsLike:result.main.feels_like,
          icon:result.weather[0].icon,
          humidity: result.main.humidity,
          temperature: result.main.temp,
          minTemp: result.main.temp_min,
          maxTemp:result.main.temp_max,
          wind:result.wind.speed,
          press: result.main.pressure,
          weat: result.weather[0].main,
          name: result.name
        })

      }
    })
  }, [])

  return (
    <div className={`App ${(time > 5 && time < 18) ? "day" : "night"}`}>
      <header className='top'>
        <h1 className='heading'>Weather App</h1>
        <div className='input-field'>
          <input type="text" onChange={getInputValue} />
          <button onClick={getWeatherInfo} className={`${(time > 5 && time < 18) ? "btn-day" : "btn-night"}`}>get weather data</button>
        </div>
      </header>
      <main className={`card ${(time > 5 && time < 18) ? "app--day" : "app--night"}`}>
        <div className='details'>
          <p className='details-p'>
            <WiDayCloudy className='md-logos'/>
            <span className='details-info feel'>{Math.round(weather.feelsLike)}</span>°C
          </p>
          <p className='details-p'>
            <WiStrongWind className='md-logos'/>
            <span className='details-info wind'>{weather.wind}</span>m/s
          </p>
          <p className='details-p'>
            <WiHumidity className='md-logos'/>
            <span className='details-info humidity'>{weather.humidity}</span>%
          </p>
        </div>
        <div className='main-temp'>
          <p className='num'>{Math.round(weather.temperature)}</p>
          <div className='min-max'>
            <p className='celcius'>°C</p>
            <p className='min-max-nums'>
              <FiArrowUp/>
              <span className='details-info'>{Math.round(weather.maxTemp)}</span>°
            </p>
            <p className='min-max-nums'>
              <FiArrowDown/>
              <span className='details-info'>{Math.round(weather.minTemp)}</span>°
            </p>
          </div>
        </div>
        <div className='city'>
          <h3>{weather.name}</h3>
          <h4>{weather.weat}</h4>
        </div>
        <div className='big-weather'>
          {weatherIcons[weather.icon]}
        </div>
      </main>
    </div>
  );
}

export default App;
