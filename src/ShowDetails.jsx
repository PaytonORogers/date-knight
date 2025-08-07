import { useState, useEffect, useContext } from 'react'
import AppContext from './App.jsx'

export function ShowDetails( show, setDetailsPage, genre, setGenre ) {
  //console.log("Show Details says" + genre)
  setGenre(show.genres)
  setDetailsPage(
    <>
      <button onClick={() => {
        setDetailsPage(null) 
        setGenre(["default"])
        }}>Reset</button>
      <img src={show.image.medium} />
      <h1>{show.name}</h1>
    </>)

  return (
    <>
      <p>Test</p>
    </>
  )
}

7