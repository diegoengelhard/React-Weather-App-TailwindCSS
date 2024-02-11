import { useState } from 'react'
import './App.css'

// Importing Components
import TopButtons from './components/TopButtons/TopButtons'
import Inputs from './components/Inputs/Inputs'
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails/TemperatureAndDetails'
import Forecast from './components/Forecast/Forecast'

function App() {

  return (
    <>
      <div className="container">
        <TopButtons />
        <main>
          <Inputs />
          <TimeAndLocation />
          <TemperatureAndDetails />
          <Forecast title='Hourly Forecast'/>
          <Forecast title='Daily Forecast'/>
        </main>
      </div>
    </>
  )
}

export default App
