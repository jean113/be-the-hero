import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile'
import NewIncidents from './pages/NewIncidents'

/**
 * A palavra exact vai fazer com as rotas seja seguidas exatamente como indicado no caminho path
 * 
 * sem ele, cairia no / e ignoraria o register
 */


export default function Routes()
{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/> 
                <Route path="/profile" component={Profile}/> 
                <Route path="/incidents/new" component={NewIncidents}/>
            </Switch>
        </BrowserRouter>
    );
}