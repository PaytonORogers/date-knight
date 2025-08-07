import { useState, createContext, useEffect } from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { Dinner } from './Dinner.jsx'
import { Drinks } from './Drinks.jsx'
import { Shows } from './Shows.jsx'

export const AppContext = createContext();

function App() {
  const [genre, setGenre] = useState(["default"])

  useEffect(() => {
    console.log("app.jsx says " + genre)
  }, [genre])

  return (
    <>
      <AppContext.Provider
          value={{
            genre,
            setGenre
          }}
        >
      <div className="window-container">
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
            <Shows genre={genre} setGenre={setGenre} />
          </div>
        </div>
      </div>
      </AppContext.Provider>
    </>
  )
}

export default App