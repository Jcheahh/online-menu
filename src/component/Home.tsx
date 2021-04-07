import { Button, Card, Carousel, Dropdown, DropdownButton, Nav, Navbar, Row } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Navbar bg="light">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/#876">Menu</Nav.Link>
                    <Nav.Link href="/stores">Store Information</Nav.Link>
                    <DropdownButton variant="warning" id="dropdown-basic-button" title="English">
                        <Dropdown.Item href="/">English</Dropdown.Item>
                        <Dropdown.Item href="/">Bahasa</Dropdown.Item>
                        <Dropdown.Item href="/">中文</Dropdown.Item>
                    </DropdownButton>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
            </Navbar>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://ucarecdn.com/c82fbc1e-4ae0-43d4-a210-3b1d2c182f6d/-/crop/1235x514/48,48/-/format/auto/-/resize/1024x/"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://ucarecdn.com/e8b2cf63-d45d-4691-a9ab-590c776d46d5/-/crop/1291x538/0,0/-/format/auto/-/resize/1024x/"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ucarecdn.com/4f4cf856-1e47-4e7e-a038-157e4485060f/-/crop/1291x537/0,21/-/format/auto/-/resize/1024x/"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div>
                <a href="/#876">
                    <div>
                        <h4>【Super Deal Limited Time Promo】 限时优惠</h4>
                    </div>
                </a>
                <a href="/#877">
                    <div>
                        <h4>【Kitchen Must Have】厨神必备 *Delivery Tuesday to Sunday 2pm - 6pm</h4>
                    </div>
                </a>
            </div>

            <div>
                <div id="876" ></div>
                <div>
                    【Super Deal Limited Time Promo】 限时优惠
                </div>
            </div>

            <p>限时优惠！好康多多~</p>
            <Row>
                <Card style={{ width: '17.5rem' }}>
                    <a href="/product/8861369">
                        <Card.Img variant="top" src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/5Combo5ChickenChopReadytoCook28b42f.jpg&amp;w=500&amp;h=500&amp;fit=cover" />
                        <Card.Body>
                            <Card.Title>5包装鸡扒 Combo 5 Chicken Chop - Ready to Cook</Card.Title>
                            <Card.Text>
                                RM59.90
                        </Card.Text>
                            <Button variant="warning">Add</Button>
                        </Card.Body>
                    </a>
                </Card>
                <Card style={{ width: '17.5rem' }}>
                    <a href="/product/8861370">
                        <Card.Img variant="top" src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V21Pumpkinslice800gfb20c2.jpg&w=500&h=500&fit=cover" />
                        <Card.Body>
                            <Card.Title>V21  南瓜块 Pumpkin slice (800g+-)</Card.Title>
                            <Card.Text>
                                RM3.90
                        </Card.Text>
                            <Button variant="warning">Add</Button>
                        </Card.Body>
                    </a>
                </Card>
                <Card style={{ width: '17.5rem' }}>
                    <a href="/product/8861371">
                        <Card.Img variant="top" src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V16LimaBeans220ged9a6c.jpg&w=500&h=500&fit=cover" />
                        <Card.Body>
                            <Card.Title>V16  棉豆 Lima Beans (220g+-)</Card.Title>
                            <Card.Text>
                                RM1.90
                        </Card.Text>
                            <Button variant="warning">Add</Button>
                        </Card.Body>
                    </a>
                </Card>
                <Card style={{ width: '17.5rem' }}>
                    <a href="/product/8861372">
                        <Card.Img variant="top" src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V1FrenchBeanse929df.jpg&w=500&h=500&fit=cover" />
                        <Card.Body>
                            <Card.Title>V1   富贵豆 French Beans (250g+-)</Card.Title>
                            <Card.Text>
                                RM3.90
                        </Card.Text>
                            <Button variant="warning">Add</Button>
                        </Card.Body>
                    </a>
                </Card>

            </Row>
            <div>
                <div id="877"></div>
                <div>【Kitchen Must Have】厨神必备 *Delivery Tuesday to Sunday 2pm - 6pm</div>
            </div>
            <p>精心挑选的烹饪好帮手；让厨房小白也能轻松变厨神！</p>

            <p> ** KLANG, Shah Alam，Cyberjaya地区，每周三运送！ </p>

            <div>
                <a href="/product/8861373">
                    <img alt="chicken" src="https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Sinceromultifunction6LpressurecookerSPC9001baee74.jpg&w=500&h=500&fit=cover"></img>
                    <h3>
                        Sincero multifunction 6L pressure cooker SPC-9001 多功能的智能电压力锅
                    </h3>
                    <div>
                        <h4>RM469.90</h4>
                        <Button variant="warning">Add</Button>
                    </div>
                </a>
            </div>
        </>
    );
}
