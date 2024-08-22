import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('/notes')
            .then(response => setNotes(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Notes</h2>
            {notes.map(note => (
                <NoteItem key={note._id} note={note} />
            ))}
        </div>
    );
};

export default NoteList;
