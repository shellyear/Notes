import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import EditNote from './components/note/EditNote';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <MainPage />} />
                <Route exact path='/post/:id/edit' render={(props) => <EditNote {...props} />} />
            </Switch>
        </BrowserRouter>
    );
};
