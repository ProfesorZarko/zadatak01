import React,{useState} from 'react'

export default function DinoForm({addUser}) {
    const [inputData, setInputData] = useState({name:"" , lastName: "" , age:""})
    const handleChange=(e)=>{
        e.preventDefault();
        setInputData((prevValue)=>{
            return{...prevValue, [e.target.name]:e.target.value}
        })
    };
    const handleClick=(e)=>{
        e.preventDefault();
        addUser(inputData);
        setInputData({name:"" , lastName: "" , age:""});
    }
  return (
    <div>
        <h3>Dino form</h3>
        <h3>ime: {inputData.name} i prezime {inputData.lastName}  sa godinama: {inputData.age}</h3>
        <form >
    <input
     type="text"
     placeholder='first name'
     name='name'
     id='name'
     value={inputData.name}
     onChange={handleChange}
     />
     <input
        type ="text"
        placeholder='last Name'
        name='lastName'
        id="lastName"
        value={inputData.lastName}
        onChange={handleChange}
     />
     <input
        type='number'
        placeholder='godine'
        name='age'
        id='age'
        value={inputData.age}
        onChange={handleChange}
     />
    <button style={{height: 33 , width: 100, fontSize:15}}
        onClick={handleClick}
     >submit</button>
</form></div>
  )
}
