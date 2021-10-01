import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path = "/" component = { HomePage } />
                    <Route exact path = "/about" component = { AboutPage } />
                    <Route exact path = "/login" component = { LoginPage } />
                    <Route component = { HomePage } />
                    <Redirect to="./" />
                </Switch>
            </>
        </Router>
    )
}
