import { useState, createContext, useEffect } from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { Dinner } from './Dinner.jsx'
import { Drinks } from './Drinks.jsx'
import { Shows } from './Shows.jsx'

export const AppContext = createContext();

function App() {
  // genre is used between Dinner and Shows to filter for the genre of tv show to display the right kind of cuisine
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
          <br />
          <div className="column-container">
            <div className="show-column">
              <Shows genre={genre} setGenre={setGenre} />
            </div>
            <div className="dinner-column">
              <Dinner genre={genre} setGenre={setGenre} />
            </div>
            {/* <div className="drink-column">
            <Drinks />
          </div> */}
          </div>
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App