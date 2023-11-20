import { TextField } from '@mui/material'
import React, { useState } from 'react'

export default function CreateNote(props) {
    const [note, setNote] = useState({title:"", content:""})
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setNote(prevNote=>{
            return({...prevNote, [name]:value})
        })
    };
    const submitNote=(e)=>{
        e.preventDefault();
        props.onAdd(note)
        setNote({title:"", content:""})
    }
  return (
    <div>
        <form>
            <input onChange={handleChange} value={note.title} type="text" placeholder='title' name='title'/>
            <TextField onChange={handleChange} value={note.content} type='text' name='content' placeholder='content' />
            <button onClick={submitNote}>addNote</button>
        </form>
    </div>
  )
}
