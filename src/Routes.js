/* Packages */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import Home from './Home';
import About from './About';
import Music from './Music';
import Contact from './Contact';
import NotFound from './NotFound';

/* Render */
const Routes = () => (
    <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/music' component={Music} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
    </Router>
)

export default Routes;