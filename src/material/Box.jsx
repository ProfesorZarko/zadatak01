import React from 'react';
import "./Box.css"

export default function Box({isActive, toggle}) {
  return (
    <div className='Box'
      onClick={toggle}
      style={{background:isActive ? "purple": "pink"}}
    >Box</div>
  )
}
