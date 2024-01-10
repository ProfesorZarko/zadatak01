import React from 'react';
import "./Box.css"

export default function Box({isActive, toggle}) {
   
  return (
    <div className='Box'
        style={{backgroundColor:isActive?"red":"blue"}}
        onClick={toggle}
    >Box</div>
  )
}
