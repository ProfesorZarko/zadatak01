import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const addOne=()=>{
        setCount(count +1)
    };
    const minusOne =()=>{
        setCount(count -1)
    }

  return (
    <div>
        <button onClick={minusOne}>-1</button>
        {count}
        <button onClick={addOne}>+1</button>    
    </div>
  )
}