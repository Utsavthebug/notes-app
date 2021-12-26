import React from "react";

const NoteList = ({note}) => {

    return (
    <div className="note-list">
        <div className="list-header">
        <h3>First App</h3>
        </div>

        <div className="list-info">
            <span className="list-date">{new Date(note.updated_at).toLocaleDateString()}</span>
            <span className="list-body">
                {note.body.length>=20?note.body.slice(0,20)+'.......':note.body}
                </span>
        </div>

    </div>
    )
}

export default NoteList;