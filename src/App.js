import { useState } from 'react';
import './App.css';
import {WiDayCloudy} from "react-icons/wi";
import {WiStrongWind} from "react-icons/wi";
import {WiHumidity} from "react-icons/wi";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { WiDaySunnyOvercast } from "react-icons/wi";

function App() {
  const [inputVal, setInputVal] = useState("Berlin");

  const getInputValue = (e) => {
    setInputVal(e.target.value);
  }

  const getWeatherInfo = () => {
    console.log(inputVal)
  }
  return (
    <div className="App">
      <header className='top'>
        <h1 className='heading'>Weather App</h1>
        <div className='input-field'>
          <input type="text" onChange={getInputValue} />
          <button onClick={getWeatherInfo}>get weather data</button>
        </div>
      </header>
      <main className='card'>
        <div className='details'>
          <p className='details-p'>
            <WiDayCloudy className='md-logos'/>
            <span className='details-info feel'>32</span>°C
          </p>
          <p className='details-p'>
            <WiStrongWind className='md-logos'/>
            <span className='details-info wind'>3.1</span>m/s
          </p>
          <p className='details-p'>
            <WiHumidity className='md-logos'/>
            <span className='details-info humidity'>86</span>%
          </p>
        </div>
        <div className='main-temp'>
          <p className='num'>32</p>
          <div className='min-max'>
            <p className='celcius'>°C</p>
            <p className='min-max-nums'>
              <FiArrowUp/>
              <span className='details-info'>5</span>°
            </p>
            <p className='min-max-nums'>
              <FiArrowDown/>
              <span className='details-info'>4</span>°
            </p>
          </div>
        </div>
        <div className='city'>
          <h3>Leipzig</h3>
          <h4>sunny</h4>
        </div>
        <WiDaySunnyOvercast className='big-weather'/>
      </main>
    </div>
  );
}

export default App;
