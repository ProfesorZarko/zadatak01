import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./Cards.css";
import axios from 'axios';
import data from "./data"

export default function Cards() {

    const [candidates, setCandidates] = useState([]);
   
    useEffect(() =>{
      axios("http://localhost:3333/api/candidates")
      .then(res=>{
          console.log("res", res)
          setCandidates(res.data)
      })
  },[])
  
  return (
    <div className='cards'>
      {candidates.map((candidate) => <Card candidate={candidate} />)}  
    </div>
  )
}
