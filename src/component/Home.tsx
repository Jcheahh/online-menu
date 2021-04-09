import React from "react";
import {
    Button,
    Card,
    CardDeck,
    Carousel,
    Dropdown,
    DropdownButton,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import CardModal from "./CardModal";
import Product from "./Product";
import "../css/Home.css";
import Cart from "./Cart";
import useCart from "../hook/useCart";

export default function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    const [cardModalShow, setCardModalShow] = React.useState(false);
    const [cartModalShow, setCartModalShow] = React.useState(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link href="/#876">Menu</Nav.Link>
                        <Nav.Link href="/stores">Store Information</Nav.Link>
                        <DropdownButton
                            variant="default"
                            id="dropdown-basic-button"
                            title="English"
                        >
                            <Dropdown.Item href="/">English</Dropdown.Item>
                            <Dropdown.Item href="/">Bahasa</Dropdown.Item>
                            <Dropdown.Item href="/">中文</Dropdown.Item>
                        </DropdownButton>
                        <Nav.Link onClick={() => setCartModalShow(true)}>
                            Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://ucarecdn.com/c82fbc1e-4ae0-43d4-a210-3b1d2c182f6d/-/crop/1235x514/48,48/-/format/auto/-/resize/1024x/"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://ucarecdn.com/e8b2cf63-d45d-4691-a9ab-590c776d46d5/-/crop/1291x538/0,0/-/format/auto/-/resize/1024x/"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://ucarecdn.com/4f4cf856-1e47-4e7e-a038-157e4485060f/-/crop/1291x537/0,21/-/format/auto/-/resize/1024x/"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br />
            <h2 className="Text2 text-center text-warning">
                Don't Miss the Promotion
            </h2>
            <br />

            <Card
                style={{ width: "22rem" }}
                className="card"
                onClick={() => setCardModalShow(true)}
            >
                <div className="cardHeader text-white">
                    <b>
                        <p className="Text5">RM15.00</p>
                    </b>
                    <p>Off Total Order!</p>
                </div>
                <div className="cardBody">
                    <p>
                        Code " SF15 " to get RM15 OFF when spend RM250 & above
                    </p>
                    <p className="details text-warning">View Details</p>
                </div>
            </Card>

            <br />
            <Nav
                fill
                variant="tabs"
                defaultActiveKey="/"
                className="shadow p-3 mb-5 bg-white rounded"
            >
                <Nav.Item>
                    <Nav.Link href="/#876">
                        【Super Deal Limited Time Promo】 限时优惠
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/#877">
                        【Kitchen Must Have】厨神必备 *Delivery Tuesday to
                        Sunday 2pm - 6pm
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="More" id="nav-dropdown">
                    <NavDropdown.Item href="/#876">
                        【Super Deal Limited Time Promo】 限时优惠
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/#877">
                        【Kitchen Must Have】厨神必备 *Delivery Tuesday to
                        Sunday 2pm - 6pm
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <br />
            <div>
                <div id="876"></div>
                <div className="Text2 text-warning">
                    【Super Deal Limited Time Promo】 限时优惠
                </div>
            </div>
            <br />
            <p className="Text4 text-warning">限时优惠！好康多多~</p>
            <CardDeck>
                <Card
                    style={{ width: "17rem" }}
                    className="shadow bg-white rounded"
                >
                    <Link
                        to="/product/8861369"
                        onClick={() => setModalShow(true)}
                    >
                        <Card.Img
                            variant="top"
                            src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/5Combo5ChickenChopReadytoCook28b42f.jpg&amp;w=500&amp;h=500&amp;fit=cover"
                        />
                        <Card.Body>
                            <Card.Title>
                                5包装鸡扒 Combo 5 Chicken Chop - Ready to Cook
                            </Card.Title>
                            <Card.Text>RM59.90</Card.Text>
                            <div className="text-center">
                                <Button
                                    variant="warning"
                                    className="text-white"
                                    block
                                    // onClick={() => addToCart()}
                                >
                                    Add
                                </Button>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>
                <Card
                    style={{ width: "17rem" }}
                    className="shadow bg-white rounded"
                >
                    <Link
                        to="/product/8861370"
                        onClick={() => setModalShow(true)}
                    >
                        <Card.Img
                            variant="top"
                            src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V21Pumpkinslice800gfb20c2.jpg&w=500&h=500&fit=cover"
                        />
                        <Card.Body>
                            <Card.Title>
                                V21 南瓜块 Pumpkin slice (800g+-)
                            </Card.Title>
                            <br />
                            <Card.Text>RM3.90</Card.Text>
                            <div className="text-center">
                                <Button
                                    variant="warning"
                                    className="text-white"
                                    block
                                >
                                    Add
                                </Button>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>
                <Card
                    style={{ width: "17rem" }}
                    className="shadow bg-white rounded"
                >
                    <Link
                        to="/product/8861371"
                        onClick={() => setModalShow(true)}
                    >
                        <Card.Img
                            variant="top"
                            src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V16LimaBeans220ged9a6c.jpg&w=500&h=500&fit=cover"
                        />
                        <Card.Body>
                            <Card.Title>
                                V16 棉豆 Lima Beans (220g+-)
                            </Card.Title>
                            <br />
                            <Card.Text>RM1.90</Card.Text>
                            <div className="text-center">
                                <Button
                                    variant="warning"
                                    className="text-white"
                                    block
                                >
                                    Add
                                </Button>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>
                <Card
                    style={{ width: "17rem" }}
                    className="shadow bg-white rounded"
                >
                    <Link
                        to="/product/8861372"
                        onClick={() => setModalShow(true)}
                    >
                        <Card.Img
                            variant="top"
                            src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V1FrenchBeanse929df.jpg&w=500&h=500&fit=cover"
                        />
                        <Card.Body>
                            <Card.Title>
                                V1 富贵豆 French Beans (250g+-)
                            </Card.Title>
                            <br />
                            <Card.Text>RM3.90</Card.Text>
                            <div className="text-center ">
                                <Button
                                    variant="warning"
                                    className="text-white"
                                    block
                                >
                                    Add
                                </Button>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>
            </CardDeck>
            <br />
            <div>
                <div id="877"></div>
                <div className="Text2 text-warning">
                    【Kitchen Must Have】厨神必备 *Delivery Tuesday to Sunday
                    2pm - 6pm
                </div>
            </div>
            <br />
            <p className="Text4 text-warning">
                精心挑选的烹饪好帮手；让厨房小白也能轻松变厨神！
            </p>

            <p className="Text4 text-warning">
                {" "}
                ** KLANG, Shah Alam，Cyberjaya地区，每周三运送！{" "}
            </p>

            <Card
                style={{ width: "17rem" }}
                className="last shadow bg-white rounded"
            >
                <Link to="/product/8861373" onClick={() => setModalShow(true)}>
                    <Card.Img
                        variant="top"
                        src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Sinceromultifunction6LpressurecookerSPC9001baee74.jpg&w=500&h=500&fit=cover"
                    />
                    <Card.Body>
                        <Card.Title>
                            Sincero multifunction 6L pressure cooker SPC-9001
                            多功能的智能电压力锅
                        </Card.Title>
                        <Card.Text>RM469.90</Card.Text>
                        <div className="text-center">
                            <Button
                                variant="warning"
                                className="text-white"
                                block
                            >
                                Add
                            </Button>
                        </div>
                    </Card.Body>
                </Link>
            </Card>

            <Route
                path="/product/:id"
                render={() => {
                    return (
                        <Product
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    );
                }}
            />

            <CardModal
                show={cardModalShow}
                onHide={() => setCardModalShow(false)}
            />

            <Cart show={cartModalShow} onHide={() => setCartModalShow(false)} />
        </>
    );
}
