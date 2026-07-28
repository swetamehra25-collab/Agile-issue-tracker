import "../styles/components.css";


function Ticket({ ticket, onClick }) {


  return (

    <div

      className="ticket-card"

      onClick={() => onClick && onClick(ticket)}

    >


      <div className="ticket-top">


        <h3>
          {ticket.title}
        </h3>



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



    </div>

  );

}


export default Ticket;