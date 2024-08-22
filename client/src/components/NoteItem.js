import React from 'react';

const NoteItem = ({ note }) => {
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>{new Date(note.date).toLocaleString()}</small>
        </div>
    );
};

export default NoteItem;
