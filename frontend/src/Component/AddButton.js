import React from "react";
import Add from '../assets/add.svg';

const AddButton = () => {
    return (
        <div className='add-div'>
        <div className='add-btn'>
          <img className='btn-img' src={Add} alt="add-button"/>
        </div>
        </div>
    )
}

export default AddButton