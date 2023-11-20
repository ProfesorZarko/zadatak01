import React, { useState } from 'react'
import ButtonMatterial from "../material/ButtonMaterial"
import CreateNote from '../material/CreateNote';
import Note from '../material/Note';


export default function Material() {
    const [notes, setNotes] = useState([])
    const addNote=(jjN)=>{
        setNotes(prevNotes=>{
            return ([...prevNotes, jjN])
        })
    };
    const deleteNote=(id)=>{
        setNotes(prevNotes=>{
            return(prevNotes.filter((noteItem, index)=>{
                return index !== id ;
            }))
        })
    }
  return (
    <div>
        <div className='first'>
            <h1>strana za vežbanje material komponenti</h1>
            <ButtonMatterial />
        </div>
        <div className='second'>
            <CreateNote onAdd={addNote}/>
            {notes.map((noteItem, index)=>{
                return(<Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    />)
            })}
        </div>
        
    </div>
  )
}