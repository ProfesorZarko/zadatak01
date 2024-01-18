import React, { useState } from 'react'
import DinoForm from './DinoForm'

export default function DinoGrid() {
    const [items, setItems] = useState([
        {name:"Mirko" , lastName: "Jovic" , age:"33"},
        {name:"Ana" , lastName: "GAjic" , age:"22"}])

    const addUser=(jjU)=>{
        setItems(prevItems=>{
            return([...prevItems, jjU])
        })
    }
  return (
    <div>
        <ul>
            {items.map((item, index)=>{
                return(<li>
                    ime : {item.name}  
                    prezime: {item.lastName}  
                    godine: {item.age} 
                </li>)
            })}
        </ul>
        <DinoForm 
            addUser={addUser}
        />
    </div>
  )
}
