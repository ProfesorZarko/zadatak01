import React, { useState } from 'react';
import Box from './Box';


export default function BoxGrid() {
    const [boxes, setBoxes]=useState([false, true, false, false])
    const reset=()=>{setBoxes([false, false, false, false])}
    const toggleBox =(jji)=>{
        setBoxes(prevBoxes=>{
            return prevBoxes.map((v,i)=>{
                if (i === jji){
                    return !v
                }else{
                    return v
                }
            })
        })
    }
  return (
    <div className='boxGrid'>
        {boxes.map((b, idx)=>{
            return(<Box 
                key={idx}
                isActive={b}
                toggle = {()=>toggleBox(idx)}
            />)
        })}
        <button onClick={reset}>reset</button>
    </div>
  )
}
