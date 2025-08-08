import { useState } from 'react'
import './App.css'

export function Navbar({ setShowSearch }) {


  return (
    <>
      <div onClick={() => {
            window.location.reload();
          }}>
        <img 
          className='logoLarge' 
          src='https://icon-library.com/images/rose-icon/rose-icon-15.jpg'
        />
        <p style={{ fontSize: '40px'}}>Date Knight</p>
      </div>
    </>
  )
}
