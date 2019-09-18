import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../../store/actions/note';


function EditNote({ match: { params: { id } }, history }) {
    const dispatch = useDispatch(); 
    const note = useSelector(state => state.notes.find(note => note.id == id));
    const [content, setContent] = useState(note ? note.content : '');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNote(id, content));
    };

    return (
        <div>
            <button onClick={() => history.goBack()}>Go back</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="content">Content</label>
                <input 
                    autoFocus
                    required 
                    type="text" 
                    id='content'
                    value={content} 
                    onChange={e => setContent(e.target.value)} 
                />
                <button type="submit" onClick={handleSubmit}>Save</button>
            </form>       
        </div>
    );
};

export default EditNote;