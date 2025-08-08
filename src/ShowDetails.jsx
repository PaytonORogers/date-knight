import { useState, useEffect, useContext } from 'react'
import AppContext from './App.jsx'
import './App.css'

export function ShowDetails(show, setDetailsPage, genre, setGenre) {
  //console.log("Show Details says" + genre)
  let summary = show.summary
  setGenre(show.genres)
  setDetailsPage(
    <div className="details-page">
      <button
        className='showResetButton'
        onClick={() => {
          setDetailsPage(null)
          setGenre(["default"])
        }}>View Another Show</button>
      <div className="poster-description">
        <img src={show.image.original} height="600px" width="400px" />
        <div className="description">
          <h1>{show.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
          <p>{`
              ${show.name} premiered on ${show.network.name} 
              on ${show.premiered}. 
              It generally shows on ${show.schedule.days} 
              at ${show.schedule.time}.
            `}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <p>Test</p>
    </>
  )
}

7