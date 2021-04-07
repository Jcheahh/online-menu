import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/product/:id">
                    <Product />
                </Route>
                <Route exact path="/users">
                    <Users />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}


function Users() {
    return <h2>Users</h2>;
}

