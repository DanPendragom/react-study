import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// Components 
import Home from './Pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;