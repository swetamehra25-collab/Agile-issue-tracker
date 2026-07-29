import { memo } from "react";
import "../styles/components.css";

function Ticket({

  ticket,

  onClick,

  moveTicket,

  deleteTicket,

}) {

  return (

    <div
      className="ticket-card"
      onClick={() => onClick && onClick(ticket)}
    >

      <div className="ticket-top">

        <h3>{ticket.title}</h3>

        <span
          className={`priority ${ticket.priority.toLowerCase()}`}
        >
          {ticket.priority}
        </span>

      </div>

      <p className="ticket-description">
        {ticket.description}
      </p>

      <div className="ticket-footer">

        <span>
          Status: {ticket.status}
        </span>

        <span>
          #{ticket.id}
        </span>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "15px",
        }}
      >

        <button
          className="move-btn"
          onClick={(e) => {

            e.stopPropagation();

            moveTicket(ticket);

          }}
        >
          Move →
        </button>

        <button
          className="move-btn"
          style={{ background: "#ef4444" }}
          onClick={(e) => {

            e.stopPropagation();

            deleteTicket(ticket.id);

          }}
        >
          Delete
        </button>

      </div>

    </div>

  );

}

export default memo(Ticket);