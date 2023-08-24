import React, { useState } from 'react'

<<<<<<< HEAD
export default function Counter() {
    const [count, setCount] = useState(0)
=======
export default function Counter({comada}) {
    const [count, setCount] = useState({comada})
>>>>>>> 87e2186d15c6d9fcd07559fcd84bc20700f1193d
    const addOne=()=>{
        setCount(count +1)
    };
    const minusOne =()=>{
<<<<<<< HEAD
      if (count > 0) {
        setCount(count - 1);
      }
=======
        setCount(count -1)
>>>>>>> 87e2186d15c6d9fcd07559fcd84bc20700f1193d
    }

  return (
    <div>
        <button onClick={minusOne}>-1</button>
        {count}
        <button onClick={addOne}>+1</button>    
    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 87e2186d15c6d9fcd07559fcd84bc20700f1193d
