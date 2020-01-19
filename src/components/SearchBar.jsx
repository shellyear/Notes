import React, { useState, useEffect } from 'react'

// const note = 'SOSOSOSO popa';
// console.log(note.toLowerCase().includes('po'.toLocaleLowerCase()))

export default function SearchBar() {
    const [search, setSearch] = useState('');

    useEffect(() => {
        return () => {
            
        };
    }, [search]);
    
    return (
        <form className='search'>
            <input 
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </form>
    );
};


