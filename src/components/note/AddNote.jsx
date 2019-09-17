import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/actions/note';


export default function AddNote() {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote(content));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="content">Content</label>
            <input required type="text" id='content' onChange={e => setContent(e.target.value)} />
            <button type="submit">Submit</button>
        </form>       
    );
};
