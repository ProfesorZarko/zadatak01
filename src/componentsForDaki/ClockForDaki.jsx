import React, { useState } from 'react'

export default function Clock() {
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    const updateTime=()=>{
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    setTimeout(updateTime,1000)
  return (
    <div>{time}</div>
  )
}
