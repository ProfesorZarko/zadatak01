import React, { useState } from 'react'

export default function DakiShopingForm() {
    const [formData, setFormData]=useState({product:"", quantitiy:"3"});
    const handleChange=(evt)=>{
      setFormData((prevData)=>{
        return{
          ...prevData,
          [evt.target.name]: evt.target.value,
        };
      }
      );
    };
    return(
        <form>
        <h3>Here goes some values</h3>
        <h2>value is : {formData.product} with {formData.quantity}</h2>
        <label htmlFor="product">Product Name</label>
,,
     
          <input type="text"
          placeholder='product name'
          name='product'
          id='product'
          onChange={handleChange}
          value={formData.product}
          />
         < label htmlFor="quantiy">quantity</label>
          <input type="number"
          placeholder='quantity'
          name='quantity'
          id='quantity'
          onChange={handleChange}
          value={formData.quantity}
          />
        </form>
      
    )
}
