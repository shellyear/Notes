import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditNote from './components/note/EditNote';
import AddNote from './components/note/AddNote';
import NotesPage from './components/NotesPage';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <NotesPage />} />
                <Route exact path='/note/:id/edit' render={(props) => <EditNote {...props} />} />
                <Route exact path='/note/add' render={() => <AddNote />} />
                <Route render={() => <NotesPage />} />
            </Switch>
        </BrowserRouter>
    );
};
