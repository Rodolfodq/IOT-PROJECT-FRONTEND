import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Pages/login';
import Register from './Pages/register';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Login} />
                <Route path="/login" component = {Login} />
                <Route path="/register" component = {Register} />
            </Switch>
        </BrowserRouter>
    );
}
