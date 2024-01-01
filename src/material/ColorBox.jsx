import React, { useState } from 'react';
import "./ColorBox.css"

export default function ColorBox({colors}) {
    const [color, setColor]=useState("slateyellow")
    const changeColor=()=>{
        const idx = Math.floor(Math.random() * colors.length);
        setColor(colors[idx])
    }
  return (
    <div className="ColorBox"
    onClick={changeColor}
    style={{background:color}}></div>
  )
}
