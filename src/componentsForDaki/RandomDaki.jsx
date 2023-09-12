import React, { useState } from 'react'

export default function RandomDaki() {
    const [randomNumber, setRandomNumber] = useState(7)
    const chooseRandomNumber =()=>{
        const newNumber = Math.floor(Math.random()*6 + 1)
        setRandomNumber(newNumber)
    }
  return (
    <div>
        <h2>random number is: {randomNumber}</h2>
        <button onClick={()=>{chooseRandomNumber()}}>click for R num</button>
    </div>
  )
}
