import React, { useState } from 'react'

export default function Counter() {
  var prviBroj = 1;
    const [count, setCount] = useState(0)
    const addOne=()=>{
        setCount(prevCount=>{
          return(prevCount +1)
        });
        console.log(prviBroj)
        console.log(50 * prviBroj);
    };
    const minusOne =()=>{
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    

  return (
    <div>
        <button onClick={minusOne}>-1</button>
        {count}
        <button onClick={addOne}>+1</button>    
    </div>
  )
}
