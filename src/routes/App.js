import React from 'react';
import { Route, Switch, NavLink, Link, BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';


const App = () => (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    </BrowserRouter>
);

export default App;


