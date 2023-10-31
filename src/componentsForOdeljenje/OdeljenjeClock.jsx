import React, { useState } from 'react'
const colors = ["red", "grey", "blue", "white"]

export default function OdeljenjeClock() {
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    const [number, setNumber] = useState(2)
    const [backgroundColor, setBackgroundColor]=useState("yellow")
    const randomNumber = Math.floor(Math.random()*colors.length + 1)
    const updateTime=()=>{
        const newTime=new Date().toLocaleTimeString();
        setTime(newTime)
        setNumber(randomNumber)
        setBackgroundColor(colors[randomNumber])
    }
    setTimeout(updateTime,5000)
  return (
    <div>
        <h3>now is : {time}</h3>
        <div style={{height:50, width:80, marginLeft:50, backgroundColor:backgroundColor}}>
            change color {number}
        </div>
    </div>
  )
}
