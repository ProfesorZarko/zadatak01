import React, { useState } from 'react'
import Box from './Box'
import "./BoxGrid.css"

export default function BoxGrid() {

    const [boxes, setBoxes] =useState([false, false, false, false, false]);
    const toggleBox=(jjI)=>{
        setBoxes(prevValue=>{
            return prevValue.map((v,i)=>{
                if(i===jjI){
                    return !v
                }else{
                    return v
                }
            })
        })
    }


  return (
    <div className='Jole'>
        <div className='BoxGrid'>
            {boxes.map((boxItem, idx)=>{
                return(<Box
                    key={idx}
                    isActive={boxItem}
                    toggle={()=>toggleBox(idx)}
                    />)
            })}
            <button
                onClick={()=>{setBoxes([false, false, false, false, false])}}
            >reset</button>
        </div>
    </div>
  )
}
