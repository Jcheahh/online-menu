import { Col, Figure, Modal, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import products from "../products";

interface RouteParams {
    id: string;
}

interface ProductModalProps {
    show: boolean;
    onHide: () => void;
}

export default function Product(props: ProductModalProps) {
    const { id } = useParams<RouteParams>();
    const history = useHistory();

    const { from } = { from: { pathname: "/" } };

    const product = products.find((p) => p.id === id);
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => {
                    history.replace(from);
                }}
            >
                <span aria-hidden="true">&times;</span>
            </button>
            <Row>
                <Col>
                    {product.photoUrl.map((photo) => (
                        <Figure.Image
                            width={471}
                            height={480}
                            alt={photo.altText}
                            src={photo.url}
                        />
                    ))}
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
                    <div>{product.price}</div>
                </Col>
            </Row>
        </Modal>
    );
}
