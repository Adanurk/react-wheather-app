import { useState } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState("Berlin");

  const getInputValue = (e) => {
    setInputVal(e.target.value);


  }
  return (
    <div className="App">
      <h1 className='heading'>Weather App</h1>
      <div className='inputField'>
        <input type="text" onChange={getInputValue} />
        <button>get weather data</button>
      </div>
      <main className='weather-container'>
        <div className='left'>
          <h2>feels like 23°C</h2>
          <h3>city name</h3>
          <img src="https://picsum.photos/100" alt="" />
        </div>
        <div className='right'>
          <h1>24°C</h1>
          <img src="https://picsum.photos/200" alt="" />
          <h2>humidity</h2>
          <h2>pressure</h2>
          <h2>Min Temp: </h2>
          <h2>Max Temp: </h2>
        </div>
      </main>
    </div>
  );
}

export default App;
