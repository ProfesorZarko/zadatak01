import React, { useState } from 'react'
import ButtonMatterial from "../material/ButtonMaterial"
import CreateNote from '../material/CreateNote';
import Note from '../material/Note';
import ClockMaterial from '../material/ClockMaterial';
import ColorBox from "../material/ColorBox.jsx";
import Joke from "../material/Joke.jsx"


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
        <div className='second' style={{height:200, backgroundColor:"lightgreen"}}>
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
            <ClockMaterial />
        </div>
        <div className="third" style={{height:200, backgroundColor:"slateblue"}}>
            <div style={{width:400}}>
                <h3> input form i zaezancija</h3>
            </div>
             <Joke />
            <div>
                <ColorBox colors={["grey", "violet", "orange", "yellow", "red", "white", "blue"]}/>
            </div>
           
        </div>
        
    </div>
  ) 
}