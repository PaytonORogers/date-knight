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
          {show.image != undefined ? (<img className="Poster" src={show.image.medium}/>) : null}
      </div>
    </>
  )
}


// function example() {
//   return condition1 ? value1
//     : condition2 ? value2
//     : condition3 ? value3
//     : value4;
// }