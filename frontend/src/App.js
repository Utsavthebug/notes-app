import React from 'react';
import './App.css';
import Header from './Component/Header';


import {Route,Routes} from 'react-router-dom';
import Notes from './pages/Notes';
import NoteAdd from './pages/NoteAdd';


function App() {
  console.log('hello')

  return (

    <div className="note-app">
    <Header/>
    <Routes>
    <Route path="/" element={<Notes/>}/>
    <Route path="note/:id" element={<NoteAdd/>} />
    </Routes>
    </div>
  
  );
}

export default App;
