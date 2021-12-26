import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';
import { Link } from "react-router-dom";

import { useEffect, useState } from "react/cjs/react.development";

const NoteAdd = () => {
    const {id} = useParams()
    const [post,setPost] = useState({})
    
    useEffect(()=>{
        getPost(id)
    },[id])

    const getPost =(id) =>{
        axios.get(`http://127.0.0.1:8000/api/note/${id}/`)
        .then((response)=>{
           setPost(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    console.log(post)
    return (
   <div className="noteadd">
       <div className="noteadd-head">
           <div className="back-arrow">
            <Link to="/"><ArrowLeft/></Link>
           </div>
        <div className="delete">
        <button className="delete-btn">Delete</button>
        </div>
       </div>

       <textarea>
           
       </textarea>

   </div>
    )
}


export default NoteAdd;