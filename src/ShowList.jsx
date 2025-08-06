import { useState, useEffect } from 'react'
export function ShowList({setShow, show}) {
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .then(show => setShow(show))
  }, [])
  return(
    <>
      {
        show ?
        <p>{show[0].name}</p>
        : <p>Waiting</p>
      }
    </>
  )
}