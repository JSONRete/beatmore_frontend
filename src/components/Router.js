import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';


import BeatsContainer from './BeatsContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/beats' component={BeatsContainer} />
        </Switch>
    );
};

export default Router;