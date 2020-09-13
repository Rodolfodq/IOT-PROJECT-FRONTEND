import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Pages/login';
import Register from './Pages/register';
import DeviceNew from './Pages/devices';
import SensorNew from './Pages/sensors';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Login} />
                <Route path="/login" component = {Login} />
                <Route path="/register" component = {Register} />
                <Route path="/newdevice" component = {DeviceNew} />
                <Route path="/newsensor" component = {SensorNew} />
            </Switch>
        </BrowserRouter>
    );
}
