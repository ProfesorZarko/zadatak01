import React, { useState } from 'react'

export default function Zadatak01() {
  const [number, setNumber]=useState(8);
  const handleChange=(e)=>{
    console.log("changed");
    setNumber(e.target.value)
  }
  return (
    <div style={{height:"200px", width:"300px", background:"yellow"}}>
        <div>
            
            <p className='number'>SELECTED NUMBER IS: <span style={{fontSize:"32px", color:"black"}}>{number}</span></p>
            <div onChange={handleChange}>
              <input type="radio" name="number" value={3}/> 3
              <input type="radio" name="number" value={5}/> 5
              <input type="radio" name="number" value={7}/> 7
            </div>
        </div>
    </div>
  )
}
