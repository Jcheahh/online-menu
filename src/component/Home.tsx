import React from "react";
import {
    Button,
    Card,
    Carousel,
    Container,
    Dropdown,
    DropdownButton,
    Nav,
    Navbar,
    NavDropdown,
    Row,
    Col,
} from "react-bootstrap";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import DiscountModal from "./DiscountModal";
import Product from "./Product";
import "../css/Home.css";
import { useCart } from "../hook/useCart";
import CartModal from "./CartModal";

function Navigation({
    showCartModal,
    cartLength,
}: {
    showCartModal: () => void;
    cartLength: number;
}) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container>
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
                        <Nav.Link onClick={showCartModal}>
                            Cart ({cartLength})
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default function Home() {
    const [modalShow, setModalShow] = React.useState(true);
    const [discountModalShow, setDiscountModalShow] = React.useState(false);
    const [cartModalShow, setCartModalShow] = React.useState(false);

    const cart = useCart()!;
    return (
        <>
            <Navigation
                showCartModal={() => setCartModalShow(true)}
                cartLength={cart.cart.length}
            />
            <Container>
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

                <h2 className="Text Text3 text-center text-warning">
                    Don't Miss the Promotion
                </h2>

                <Card
                    className="discount"
                    onClick={() => setDiscountModalShow(true)}
                >
                    <div className="discountHeader text-white">
                        <b>
                            <p className="Text Text2">RM15.00</p>
                        </b>
                        <p>Off Total Order!</p>
                    </div>
                    <div className="discountBody">
                        <p>
                            Code " SF15 " to get RM15 OFF when spend RM250 &
                            above
                        </p>
                        <p className="details text-warning">View Details</p>
                    </div>
                </Card>

                <Nav
                    fill
                    variant="tabs"
                    defaultActiveKey="/"
                    className="shadow p-3 mb-5 bg-white rounded super-deal-tab"
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

                <div>
                    <div id="876"></div>
                    <div className="Text Text3 text-warning">
                        【Super Deal Limited Time Promo】 限时优惠
                    </div>
                </div>

                <p className="Text Text5 text-warning">限时优惠！好康多多~</p>
                <Row className="product-row">
                    <Col xs={6} md={3}>
                        <Card className="shadow bg-white rounded">
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
                                        5包装鸡扒 Combo 5 Chicken Chop - Ready
                                        to Cook
                                    </Card.Title>
                                    <Card.Text>RM59.90</Card.Text>
                                    <Button
                                        variant="warning"
                                        className="text-white"
                                        block
                                        // onClick={() => addToCart()}
                                    >
                                        Add
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col xs={6} md={3}>
                        <Card className="shadow bg-white rounded">
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

                                    <Card.Text>RM3.90</Card.Text>
                                    <Button
                                        variant="warning"
                                        className="text-white"
                                        block
                                    >
                                        Add
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col xs={6} md={3}>
                        <Card className="shadow bg-white rounded">
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

                                    <Card.Text>RM1.90</Card.Text>
                                    <Button
                                        variant="warning"
                                        className="text-white"
                                        block
                                    >
                                        Add
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col xs={6} md={3}>
                        <Card className="shadow bg-white rounded">
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

                                    <Card.Text>RM3.90</Card.Text>
                                    <Button
                                        variant="warning"
                                        className="text-white"
                                        block
                                    >
                                        Add
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>

                <div>
                    <div id="877"></div>
                    <div className="Text Text3 text-warning">
                        【Kitchen Must Have】厨神必备 *Delivery Tuesday to
                        Sunday 2pm - 6pm
                    </div>
                </div>

                <p className="Text Text5 text-warning">
                    精心挑选的烹饪好帮手；让厨房小白也能轻松变厨神！
                </p>

                <p className="Text Text5 text-warning">
                    {" "}
                    ** KLANG, Shah Alam，Cyberjaya地区，每周三运送！{" "}
                </p>

                <Row>
                    <Col xs={6} md={3}>
                        <Card className="last shadow bg-white rounded">
                            <Link
                                to="/product/8861373"
                                onClick={() => setModalShow(true)}
                            >
                                <Card.Img
                                    variant="top"
                                    src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Sinceromultifunction6LpressurecookerSPC9001baee74.jpg&w=500&h=500&fit=cover"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        Sincero multifunction 6L pressure cooker
                                        SPC-9001 多功能的智能电压力锅
                                    </Card.Title>
                                    <Card.Text>RM469.90</Card.Text>
                                    <Button
                                        variant="warning"
                                        className="text-white"
                                        block
                                    >
                                        Add
                                    </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Route
                path="/product/:id"
                render={({ history }) => {
                    return (
                        <Product
                            show={modalShow}
                            onHide={() => {
                                setModalShow(false);

                                // To keep the modal closing animation
                                setTimeout(() => {
                                    const { from } = {
                                        from: { pathname: "/" },
                                    };
                                    history.replace(from);
                                }, 150);
                            }}
                        />
                    );
                }}
            />

            <DiscountModal
                show={discountModalShow}
                onHide={() => setDiscountModalShow(false)}
            />

            <CartModal
                show={cartModalShow}
                onHide={() => setCartModalShow(false)}
            />
        </>
    );
}
