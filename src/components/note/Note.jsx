import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../store/actions/note';


const Note = ({ note: { id, content } }) => {
    const dispatch = useDispatch();
    
    return (
        <li className='note'>
            <p>{content}</p>
            <div className="btn-group">
                <div className='btn'>
                    <Link to={`/note/${id}/edit`}>Edit</Link>
                </div>
                <div className='btn' onClick={() => dispatch(deleteNote(id))}>
                    Delete
                </div>
            </div>
        </li>
    );
};

export default Note;
