import { useState, useEffect } from 'react'
import './App.css'

import getFormattedWeatherData from './services/weather.service'

// Importing Components
import TopButtons from './components/TopButtons/TopButtons'
import Inputs from './components/Inputs/Inputs'
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails/TemperatureAndDetails'
import Forecast from './components/Forecast/Forecast'

// Import Loader
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

function App() {
  // Set States
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Weather Data from API
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const data = await getFormattedWeatherData({ ...query, units });
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, [query, units]);

  console.log(weather);

  return (
    loading ? <LoadingSpinner /> :
    <>
      <div className="container">
        <TopButtons setQuery={setQuery} />
        <main>
          <Inputs />
          <TimeAndLocation 
            date={weather?.dt} 
            timezone={weather?.timezone}
            city={weather?.name}
            country={weather?.country}
           />
          <TemperatureAndDetails 
            details={weather?.details}
            icon={weather?.icon}
            temp={weather?.temp}
            feels_like={weather?.feels_like}
            humidity={weather?.humidity}
            speedWind={weather?.speed}
            sunrise={weather?.sunrise}
            sunset={weather?.sunset}
            timezone={weather?.timezone}
            temp_min={weather?.temp_min}
            temp_max={weather?.temp_max}            
          />
          <Forecast title='Hourly Forecast' items={weather?.hourly} />
          <Forecast title='Daily Forecast' items={weather?.daily} />
        </main>
      </div>
    </>
  );
}

export default App
