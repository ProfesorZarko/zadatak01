import React from 'react'
import Card from './Card'
import "./Cards.css"
import data from "./data"

export default function Cards() {

    const candidates = data.candidates;
  
  return (
    <div className='cards'>
      {candidates.map((candidate) => <Card candidate={candidate} />)}  
    </div>
  )
}
