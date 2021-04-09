import { Card, Modal } from "react-bootstrap";
import "../css/CardModal.css";

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
            contentClassName="cardContent"
        >
            <Card
                className="cardModal"
                data-toggle="modal"
                data-target="#exampleModalCenter"
            >
                <div>
                    <button
                        type="button"
                        className="cardButton close"
                        aria-label="Close"
                        onClick={props.onHide}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="cardHeader text-white">
                        <b>
                            <p className="Text1">RM15.00</p>
                        </b>
                        <p className="Text3">Off Total Order!</p>
                    </div>
                    <div className="cardBody">
                        <p className="Text3">
                            Code " SF15 " to get RM15 OFF when spend RM250 &
                            above
                        </p>
                        <p className="text-warning">
                            Apply Code " SF15 " to get RM15 OFF when spend RM250
                            & above
                        </p>
                        <p className="text-warning m-0">
                            Valid for Pickup and Delivery!
                        </p>
                    </div>
                </div>
            </Card>
        </Modal>
    );
}

export default CardModal;
