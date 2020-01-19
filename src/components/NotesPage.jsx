import React from 'react'
import NoteList from './note/NoteList';
import SearchBar from './SearchBar';
import Footer from './Footer';
import Header from './Header';
import { Container } from '../ui/atoms/Container';
import { Link } from '../ui/atoms/Link';
import { Icon } from '../ui/atoms/Icon';


export default function NotesPage() {
    return (
        <Container>
					<Header />
						<SearchBar />
							<Link to='/note/add' replace={true}>
									<Icon src='/add.svg' alt='add'/>
							</Link>
						<NoteList />
					<Footer />
        </Container>
    );
};
