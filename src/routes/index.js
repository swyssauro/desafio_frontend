import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Registro from '../pages/Registro';
import CargosAdd from '../pages/Cargos';
import Profile from '../pages/Profile';
import Explore from '../pages/Explore';
import Discrim from '../pages/FindDisc';
import Login from '../pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/perfil" component={Profile} />
                <Route exact path="/welcome" component={Discrim} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/cargos" component={CargosAdd}/>
            </Switch>
        </BrowserRouter>
    );
}