import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navbar bg="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Brand href="/">Menu</Navbar.Brand>
            </Navbar>
            <div>
                <a href="/#876">
                    <div>
                        <h4>【Super Deal Limited Time Promo】 限时优惠</h4>
                    </div>
                </a>
            </div>
            <div>
                <div>

                    <div id="876" ></div>
                    <div>
                        【Super Deal Limited Time Promo】 限时优惠
                    </div>
                </div>
            </div>
            <p>限时优惠！好康多多~</p>
            <div><Link to="/product/8861369">product1</Link></div>
            <div><Link to="/product/8861370">product2</Link></div>
            <div><Link to="/product/8861371">product3</Link></div>
        </>
    );
}
