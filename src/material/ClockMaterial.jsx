import React, { useState } from 'react'

export default function ClockMaterial() {
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    const updateTime=()=>{
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    setTimeout(updateTime,1000)
  return (
    <div style={{fontSize:33}}>{time}</div>
  )
}
