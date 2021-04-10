import React from "react";
import { Button, Col, Figure, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router";
import products from "../products";
import { useCart } from "../hook/useCart";
import "../css/Product.css";

interface RouteParams {
    id: string;
}

interface ProductModalProps {
    show: boolean;
    onHide: () => void;
}

export default function Product(props: ProductModalProps) {
    const { id } = useParams<RouteParams>();
    const [amount, setAmount] = React.useState(1);
    const cart = useCart()!;

    const product = products.find((p) => p.id === id);
    if (!product) {
        return <div>Product not found</div>;
    }

    const addItem = () => {
        cart.addToCart({
            productId: id,
            amount,
        });
        props.onHide();
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="productModal">
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => props.onHide()}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <Row>
                    <Col>
                        <Figure.Image
                            width={471}
                            height={480}
                            alt={product.photo.altText}
                            src={product.photo.url}
                        />
                    </Col>
                    <Col>
                        <h3>{product.title}</h3>
                        <p
                            style={{
                                whiteSpace: "break-spaces",
                            }}
                        >
                            {product.description}
                        </p>
                        <div>RM{product.price.toFixed(2)}</div>
                    </Col>
                </Row>
                <br />
                <Modal.Footer className="productModalFooter">
                    <Button
                        variant="default text-warning"
                        className="changeAmountButton"
                        onClick={() => setAmount((a) => a - 1)}
                        disabled={amount <= 1}
                    >
                        -
                    </Button>
                    <input
                        value={amount}
                        className="productInput"
                        type="number"
                        onChange={(e) => {
                            setAmount(parseInt(e.target.value, 10));
                        }}
                    />
                    <Button
                        variant="default text-warning"
                        className="changeAmountButton"
                        onClick={() => setAmount((a) => a + 1)}
                    >
                        +
                    </Button>
                    <Button
                        variant="warning"
                        className="productModalButton"
                        block
                        onClick={addItem}
                        disabled={amount < 1}
                    >
                        Add RM{(product.price * amount).toFixed(2)}
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}
