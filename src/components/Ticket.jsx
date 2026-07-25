import "../styles/components.css";

function Ticket({ ticket }) {
  return (
    <div className="ticket">

      <div className="ticket-top">

        <h3>{ticket.title}</h3>

        <span className={ticket.priority.toLowerCase()}>
          {ticket.priority}
        </span>

      </div>

      <p>{ticket.description}</p>

      <div className="ticket-bottom">

        <div className="avatar">
          {ticket.assignee[0]}
        </div>

        <span>{ticket.assignee}</span>

      </div>

    </div>
  );
}

export default Ticket;