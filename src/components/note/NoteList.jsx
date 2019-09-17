import React from 'react';
import Note from './Note';
import { useSelector } from 'react-redux';


export default function NoteList() {
    const notes = useSelector(state => state.notes);

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes && notes.map(note => (
                    <Note 
                        key={note.id}
                        note={note}
                    />
                ))}
            </ul>
        </div>

    );
};;
