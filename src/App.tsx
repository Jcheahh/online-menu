import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import { cartContext, useProvideCart } from "./hook/useCart";

export default function App() {
    return (
        <ProvideCart>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ProvideCart>
    );
}

function ProvideCart({ children }: { children: JSX.Element }) {
    const cart = useProvideCart();
    return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}
