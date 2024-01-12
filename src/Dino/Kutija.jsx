import React from 'react'
import "./Dino.css"

export default function Kutija({isActive, toggle}) {
    
  return (
    <div className='kutija'
        style={{backgroundColor:isActive?"grey":"violet"}}
        onClick={toggle}
    ></div>
  )
}
