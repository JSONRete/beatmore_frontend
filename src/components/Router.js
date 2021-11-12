import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import BeatsContainer from './BeatsContainer'
import BeatsForm from './BeatsForm';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beats' component={BeatsContainer} />
            <Route exact path='/new' component={BeatsForm} />
            <Route path ="*" render={() => <h1 id="error">NO SUCH PAGE</h1>} />
        </Switch>
    );
};

export default Router;