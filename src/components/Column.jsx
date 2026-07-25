import Ticket from "./Ticket";
import "../styles/components.css";

function Column({ title, tickets }) {
  return (
    <div className="column">

      <div className="column-header">

        <h2>{title}</h2>

        <span>{tickets.length}</span>

      </div>

      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          ticket={ticket}
        />
      ))}

    </div>
  );
}

export default Column;