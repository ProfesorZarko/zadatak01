import React, { useState } from 'react';
import axios from 'axios';

export default function Joke() {
    const [joke, setJoke] = useState("shalalala")
    const newJoke= async()=>{
        const config={headers:{Accept:"application/json"}};
        const res= await axios.get("https://icanhazdadjoke.com/", config);
        return (res.data.joke);
    }
    const updateJoke=()=>{setJoke(newJoke)} 
  return (
    <div>
        <h4>here goes one joke</h4>
        <h4>{joke}</h4>
        <button style={{height:25, width:130, fontSize:20}}
        onClick={updateJoke}
    > click for new joke</button>
    </div>
  )
}
