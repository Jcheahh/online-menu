import { Card, Modal } from "react-bootstrap";

interface CardModalProps {
    show: boolean;
    onHide: () => void;
}

function CardModal(props: CardModalProps) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Card
                style={{ width: "25rem" }}
                className="card"
                data-toggle="modal"
                data-target="#exampleModalCenter"
            >
                <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={props.onHide}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="cardHeader text-white">
                    <b>
                        <p className="Text3">RM15.00</p>
                    </b>
                    <p>Off Total Order!</p>
                </div>
                <div className="cardBody">
                    <p>
                        Code " SF15 " to get RM15 OFF when spend RM250 & above
                    </p>
                    <p className="details">View Details</p>
                </div>
            </Card>
        </Modal>
    );
}

export default CardModal;
