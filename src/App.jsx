import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { Dinner } from './Dinner.jsx'
import { Drinks } from './Drinks.jsx'
import { Shows } from './Shows.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="column-container">
        <div className="dinner-column">
          <Dinner />
        </div>
        <div className="drink-column">
          <Drinks />
        </div>
        <div className="show-column">
          <Shows />
        </div>
      </div>
    </>
  )
}

export default App
