import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ note, onSave }) => {
    const [title, setTitle] = useState(note ? note.title : '');
    const [content, setContent] = useState(note ? note.content : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const noteData = { title, content };

        if (note) {
            axios.put(`/notes/${note._id}`, noteData)
                .then(response => onSave(response.data))
                .catch(error => console.log(error));
        } else {
            axios.post('/notes', noteData)
                .then(response => onSave(response.data))
                .catch(error => console.log(error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">{note ? 'Update Note' : 'Add Note'}</button>
        </form>
    );
};

export default NoteForm;
