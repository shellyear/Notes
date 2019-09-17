import React from 'react'
import NoteList from './note/NoteList';
import AddNote from './note/AddNote';


export default function MainPage() {
    return (
        <div>
            <AddNote />
            <NoteList />
        </div>
    );
};
