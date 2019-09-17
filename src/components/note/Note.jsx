import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../store/actions/note';


export default function Note({ note: { id, title, content } }) {
    const dispatch = useDispatch();
    
    return (
        <li>
            <h4>{title}</h4>
            <p>{content}</p>
            <button type='submit'>
                <Link to={`/post/${id}/edit`}>Edit</Link>
            </button>
            <button type='submit' onClick={() => dispatch(deleteNote(id))}>
                Delete
            </button>
        </li>
    );
};
