import { useState, useEffect} from 'react'
import { ShowDetails } from './ShowDetails.jsx'


export function ShowTile({ show, setDetailsPage, genre, setGenre }) {
  useEffect(() => {
    console.log("ShowTile.jsx says " + genre)
  }, [genre])
  return(
    <>
      <div className="Movie-Poster" onClick={() => ShowDetails(show, setDetailsPage, genre, setGenre)}>
          <div className="poster-title">{show.name}</div>
          <img className="Poster" src={show.image.medium} />
      </div>
    </>
  )
}
