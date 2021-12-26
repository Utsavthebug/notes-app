import React from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";

const NoteAdd = () => {
    const {id} = useParams()
    const [post,setPost] = useState({})
    let navigate = useNavigate()

    useEffect(()=>{
        getPost()
    },[id])

    const getPost =() =>{
        if(id=='new'){
            return;
        }
        axios.get(`http://127.0.0.1:8000/api/note/${id}/`)
        .then((response)=>{
           setPost(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    const deleteButton = () => {
        axios.delete(`http://127.0.0.1:8000/api/note/${id}/`)
        .then((response)=>{
            navigate("/")
            console.log("hello")
        })
    }

  const handleClick = () => {
      if(id=='new' && post.body) {
         // addPost();
         console.log('new')
      }

      else if(id!='new' && post.body) {
         // editPost();
         console.log('old one')
      }

      else if(id!='new' && !post.body){
          deleteButton();
      }

      navigate("/")
  }


    return (
   <div className="noteadd">
       <div className="noteadd-head">
           <div className="back-arrow">
            <Link to="/"><ArrowLeft onClick={handleClick}/></Link>
           </div>
        <div className="delete">
        {
            (id!='new') ? <button onClick={deleteButton} className="delete-btn">Delete</button> : ''
        }

        </div>
       </div>

       <textarea onChange={(e)=>setPost({...post,body:e.target.value})} value={post?.body}>

       </textarea>

   </div>
    )
}


export default NoteAdd;