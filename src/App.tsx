import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./component/Home";
import { cartContext, useProvideCart } from "./hook/useCart";

export default function App() {
    return (
        <ProvideCart>
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </ProvideCart>
    );
}

function Users() {
    return <h2>Users</h2>;
}

function ProvideCart({ children }: { children: JSX.Element }) {
    const cart = useProvideCart();
    return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}
