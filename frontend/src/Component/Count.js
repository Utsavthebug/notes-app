import React from "react";
// import {Link} from 'react-router-dom';


const Count = ({count}) => {

    return (
        <div className="list-count">
            <div className="menu">
            <div className="menu-bar">
            <i className="fas fa-bars"></i>
            </div>

            <div className="menu-text">
                <h4>Notes</h4>
            </div>
            </div>

            <div className="count">
              {count} </div>

        </div>
    )

}

export default Count;