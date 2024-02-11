import { useState } from 'react'
import './App.css'

// Importing Components
import TopButtons from './components/TopButtons/TopButtons'
import Inputs from './components/Inputs/Inputs'

function App() {

  return (
    <>
      <div className="container">
        <TopButtons />
        <main>
          <Inputs />
        </main>
      </div>
    </>
  )
}

export default App
