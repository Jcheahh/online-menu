import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./component/Home";
// import Product from "./component/Product";

export default function App() {
    return (
        <Container>
            <Router>
                <Switch>
                    {/* <Route exact path="/product/:id">
                        <Product />
                    </Route> */}
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

function Users() {
    return <h2>Users</h2>;
}
