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
      {show.name}<br/>
    </>
  )
}