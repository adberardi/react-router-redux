import React from 'react';
import { Route, Switch, NavLink, Link, BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register}/>
        </Switch>
    </BrowserRouter>
);

export default App;


