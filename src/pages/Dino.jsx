import React, { useState } from 'react';
import "../Dino/Dino.css"
import Kutija from '../Dino/Kutija';
import GPTJoke from "../Dino/GPTJoke"

export default function Dino() {
    const [count , setCount] = useState(11)
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
            <button onClick={reset} className='btnReset'>reset</button>
        </div>
        <div className='middle'>
            <GPTJoke count ={count}/>
            <GPTJoke count ={count}/>
            <GPTJoke count ={count}/>
            <button 
                style={{height:25, width: 100, fontSize:12}}
                onClick={()=>{setCount(count + 1)}}
                >click fro new joke</button>
        </div>
        <div className='footer'>footer</div>
        
    </div>
  )
}
