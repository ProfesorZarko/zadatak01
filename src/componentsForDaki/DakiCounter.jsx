import React, { useState } from 'react';
import "./DakiCounter.css"

export default function DakiCounter() {
    const [count, setCount]= useState(5)
  return (
    <div className='DakiCounter'>
        <button onClick={()=>{setCount(count-1)}}>-1</button>
            {count}
        <button onClick={()=>{setCount(count+1)}}>+1</button>
        </div>
  )
}
