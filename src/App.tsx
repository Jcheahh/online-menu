import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./component/Home";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}


function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

