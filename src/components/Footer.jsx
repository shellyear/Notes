import React from 'react';
import { FooterUI } from '../ui/molecules/Footer';
import { useSelector } from 'react-redux';


const Footer = () => {
    const notesCount = useSelector(({ content }) => content.notes.length)
    return (
        <FooterUI>{notesCount} notes</FooterUI>
    );
};

export default Footer;