import React from 'react';
import Note from './Note';
import { useSelector } from 'react-redux';


export default function NoteList() {
    const notes = useSelector(state => state.content.notes);

    return (
        <div>
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
