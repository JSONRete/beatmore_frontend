import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import Producers from './Producers';
import BeatsList from './BeatsList';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/producers' component={Producers} />
            <Route path='/beats' component={BeatsList} />
        </Switch>
    );
};

export default Router;