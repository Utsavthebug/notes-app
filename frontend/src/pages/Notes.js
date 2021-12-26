import React from "react";
import axios from 'axios';
import {useState,useEffect} from 'react';
import NoteList from "../Component/NoteList";
import { Link } from "react-router-dom";
import Count from "../Component/Count";
import AddButton from "../Component/AddButton";

const Notes = () => {
    const [notes,setNotes] = useState([]);


    useEffect(()=>{
        getNotes();
       },[])

       
    const getNotes = () => {
        axios.get('http://127.0.0.1:8000/api/note/')
        .then((response)=>{
          setNotes(response.data)
    
        })
        .catch((error)=>{
          console.log(error);
        })
      }

    return (
       <>
       <Count count={notes.length}/>
        {notes.map((note,key)=>{
            return (
            <Link key={key} to={`note/${note.id}`}  style={{ textDecoration: 'none' }}>
              <NoteList  note={note}/>
            </Link>
            )
          })}
      <AddButton/>  
    </>
    )
}

export default Notes