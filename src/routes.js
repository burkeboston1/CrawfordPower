/* Packages */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Components */
import Home from './home';
import About from './about';
import Music from './music';
import Contact from './contact';
import NotFound from './not-found';

/* Render */
const Routes = () => (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/music' component={Music} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
    </Switch>
)

export default Routes;