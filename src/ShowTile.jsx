import { useState, useEffect} from 'react'
import { ShowDetails } from './ShowDetails.jsx'


export function ShowTile({ show, setDetailsPage, genre, setGenre }) {
  useEffect(() => {
    console.log("ShowTile.jsx says " + genre)
  }, [genre])
  return(
    <div className="Movie-Poster" onClick={() => ShowDetails(show, setDetailsPage, genre, setGenre)}>
        {show.name}<br />
        <img src={show.image.medium} />
    </div>
  )
}
