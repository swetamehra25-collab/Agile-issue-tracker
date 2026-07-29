import { useEffect, useRef } from "react";

import "../styles/components.css";

function TicketModal({ ticket }) {

    const modalRef = useRef();

    useEffect(() => {

        if (!ticket) return;

        modalRef.current.showModal();

        const handleKeyDown = (event) => {

            if (event.key === "Escape") {

                modalRef.current.close();

            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, [ticket]);

    const closeModal = () => {

        modalRef.current.close();

    };

    if (!ticket) {

        return null;

    }

    return (

        <dialog
            ref={modalRef}
            className="ticket-modal"
        >

            <div className="modal-content">

                <h2>{ticket.title}</h2>

                <p>{ticket.description}</p>

                <div className="modal-info">

                    <span>
                        <strong>Priority:</strong> {ticket.priority}
                    </span>

                    <span>
                        <strong>Status:</strong> {ticket.status}
                    </span>

                    <span>
                        <strong>Assignee:</strong> {ticket.assignee}
                    </span>

                    <span>
                        <strong>Ticket ID:</strong> #{ticket.id}
                    </span>

                </div>

                <button
                    className="close-btn"
                    onClick={closeModal}
                >
                    Close
                </button>

            </div>

        </dialog>

    );

}

export default TicketModal;