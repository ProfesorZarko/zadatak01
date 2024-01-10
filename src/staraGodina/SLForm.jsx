import React, { useState } from 'react'

export default function SLForm() {
    const [formData, setFormData]=useState({name:"banane", quantity:8})
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setFormData(prevData=>{
            return({...prevData, [name]:value})
        })

    }
  return (
    <div>
        <form >
            <label htmlFor="name">input name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange}/>
            <label htmlFor="qnt">qnt</label>
            <input type='number' name='qnt' value={formData.quantity} onChange={handleChange}/>
        </form>
        <h3>name is : {formData.name} and quantity is : {formData.quantitiy}</h3>
    </div>
  )
}
