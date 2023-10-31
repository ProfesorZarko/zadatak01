import React, { useEffect, useState } from 'react';
import ucenici from './ucenici';

export default function Ucenici() {
    const [ucenik, setUcenik]= useState({name: "", age:""})
    const handleChange=(e)=>{
        setUcenik(prevValue=>{
            return({...prevValue, 
                [e.target.name]:e.target.value})
        })
    }

    const handleClick=(e)=>{
        ucenici.push(ucenik)
    }
   
    useEffect(()=>{
        handleClick()
    }, [])

  return (
    <div>
        <input 
            name='name'
            id='name'
            value={ucenik.name}
            placeholder='name'
            onChange={handleChange}
            type='text' />
        <input 
            type='text'
            name='age'
            id='age'
            value={ucenik.age}
            placeholder='age'
            onChange={handleChange} 
            />
        <h1>novi učenik: {ucenik.name} i ima godina :{ucenik.age}</h1>

        <button onClick={handleClick}>click to add UCENIK</button>

       <h2> Učenici it odeljenja </h2>
       {ucenici.map(item=>{
        return(<div>
            <h3>{item.name}</h3>
            <h3>{item.age}</h3>
        </div>)
       })}
       
    </div>
  )
}
