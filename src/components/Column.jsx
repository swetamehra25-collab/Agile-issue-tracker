import Ticket from "./Ticket";
import "../styles/components.css";

function Column({
  title,
  tickets,
  onTicketClick,
  moveTicket,
}) {

  return (

    <div className="column">

      <div className="column-header">

        <h2>{title}</h2>

        <span className="ticket-count">
          {tickets.length}
        </span>

      </div>

      <div className="column-body">

        {

          tickets.length > 0 ? (

            tickets.map((ticket) => (

              <Ticket

                key={ticket.id}

                ticket={ticket}

                onClick={onTicketClick}

                moveTicket={moveTicket}

              />

            ))

          ) : (

            <p className="empty-text">
              No tickets
            </p>

          )

        }

      </div>

    </div>

  );

}

export default Column;