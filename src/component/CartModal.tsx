import "../css/CartModal.css";
import { Button, Figure, Modal } from "react-bootstrap";
import { useCart } from "../hook/useCart";
import products from "../products";

interface CartModalProps {
    show: boolean;
    onHide: () => void;
}

function CartModal(props: CartModalProps) {
    const cart = useCart()!;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="cartDialog"
            contentClassName="cartContent"
        >
            <button
                type="button"
                className="modalCloseButton close"
                aria-label="Close"
                onClick={props.onHide}
            >
                <span aria-hidden="true">&times;</span>
            </button>

            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your Cart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="cartModalBody">
                {cart.cart.length > 0 ? (
                    <h4>Item(s) Added</h4>
                ) : (
                    <>
                        <h4>Your cart is empty</h4>
                        <p className="text-warning">
                            Looks like you have no items in your cart
                        </p>
                    </>
                )}

                <>
                    {cart.cart.map((item) => {
                        const product = products.find(
                            (p) => p.id === item.productId
                        );
                        if (!product) {
                            return <p key={item.productId}>item not found</p>;
                        } else {
                            return (
                                <div
                                    key={item.productId}
                                    className="cartModalItem"
                                >
                                    <p>
                                        <Figure.Image
                                            width={101}
                                            height={150}
                                            alt={product.photo.altText}
                                            src={product.photo.url}
                                        />
                                    </p>
                                    <p>{product.title}</p>
                                    <Button
                                        onClick={() => {
                                            cart.removeCartItem(item.productId);
                                        }}
                                    >
                                        Delete item
                                    </Button>
                                    <Button
                                        variant="default text-warning"
                                        className="changeAmountButton"
                                        onClick={() => {
                                            cart.decreaseItemInCart(
                                                item.productId
                                            );
                                        }}
                                    >
                                        -
                                    </Button>
                                    <input
                                        value={item.amount}
                                        className="productInput"
                                        type="number"
                                        onChange={(e) => {
                                            cart.modifyItemAmount(
                                                item.productId,
                                                (_amount) =>
                                                    parseInt(e.target.value)
                                            );
                                        }}
                                    />
                                    <Button
                                        variant="default text-warning"
                                        className="changeAmountButton"
                                        onClick={() =>
                                            cart.increaseItemInCart(
                                                item.productId
                                            )
                                        }
                                    >
                                        +
                                    </Button>
                                    <p>
                                        RM
                                        {(product.price * item.amount).toFixed(
                                            2
                                        )}
                                    </p>
                                </div>
                            );
                        }
                    })}
                </>
            </Modal.Body>
            <Modal.Footer>
                <p>Total</p>
                <p>
                    RM
                    {cart.cart
                        .reduce((amount, item) => {
                            const product = products.find(
                                (p) => p.id === item.productId
                            );
                            if (product) {
                                return amount + product.price * item.amount;
                            } else {
                                return amount;
                            }
                        }, 0)
                        .toFixed(2)}
                </p>
                <Button variant="warning text-white" block>
                    Select your dining preference
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;
