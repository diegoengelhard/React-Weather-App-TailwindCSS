import { useState } from 'react'
import './App.css'

// Importing Components
import TopButtons from './components/TopButtons/TopButtons'
import Inputs from './components/Inputs/Inputs'
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation'

function App() {

  return (
    <>
      <div className="container">
        <TopButtons />
        <main>
          <Inputs />
          <TimeAndLocation />
        </main>
      </div>
    </>
  )
}

export default App
