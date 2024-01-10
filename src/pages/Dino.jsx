import React, { useState } from 'react';
import "../Dino/Dino.css"
import Kutija from '../Dino/Kutija';

export default function Dino() {
    const [kutijaGrid,setKutijaGrid] = useState([false, false, true, true, true, false])
    const reset=()=>{setKutijaGrid([true, true, true, true, true, true])};
    const toggleKutija=(idx)=>{
        setKutijaGrid(prevItem=>{
            return prevItem.map((v,i)=>{
                    if(i===idx){
                        return !v
                    }else{
                        return v
                    }
            })
        })
    }
  return (
    <div className='main'>
        <div className='upper'>
            {kutijaGrid.map((b,idx)=>{
                return(<Kutija 
                    isActive={b}
                    toggle={()=>toggleKutija(idx)}
                    />)
            })}
            <button onClick={reset}>reset</button>
        </div>
        <div className='middle'>middle</div>
        <div className='footer'>footer</div>
        
    </div>
  )
}
