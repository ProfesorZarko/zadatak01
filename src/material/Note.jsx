import React from 'react'

export default function Note(props) {
    const handleClick=()=>{
        props.onDelete(props.id)
    }
  return (
    <div style={{height:150, width:200, backgroundColor:"pink"}}>
        <h3>{props.title}</h3>
        <p>{props.id} is {props.content}</p>
        <button style={{height:10}} onClick={handleClick}>Delete</button>
    </div>
  )
}
