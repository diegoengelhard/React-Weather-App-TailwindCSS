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
        let data;
  
        const cachedData = localStorage.getItem('weatherData');
        if (cachedData) {
          data = JSON.parse(cachedData);
        } else {
          data = await getFormattedWeatherData({ ...query, units });
          localStorage.setItem('weatherData', JSON.stringify(data));
        }
  
        setWeather(data);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [query, units]);

  // Render
  return (
    loading ? <LoadingSpinner /> :
    <>
      <div className="container">
        <TopButtons />
        <main>
          <Inputs />
          <TimeAndLocation 
            date={weather?.dt} 
            timezone={weather?.timezone}
            city={weather?.name}
            country={weather?.country}
           />
          <TemperatureAndDetails />
          <Forecast title='Hourly Forecast' />
          <Forecast title='Daily Forecast' />
        </main>
      </div>
    </>
  );
}

export default App
