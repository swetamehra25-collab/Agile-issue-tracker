import "../styles/components.css";
import Ticket from "./Ticket";

function Dashboard() {
  const tickets = [
    {
      id: 1,
      title: "Login Issue",
      description: "User is unable to login",
      priority: "High",
      status: "Open",
    },
    {
      id: 2,
      title: "Payment Bug",
      description: "Payment page is not working",
      priority: "Medium",
      status: "Pending",
    },
  ];
  const onTicketClick = (ticket) => {
    console.log("Selected Ticket:", ticket);
  };
  const openTickets = tickets.filter((ticket) => ticket.status === "Open");
  const pendingTickets = tickets.filter(
    (ticket) => ticket.status === "Pending",
  );
  return (
    <div>
      {" "}
      {/* Stats */}{" "}
      <div className="stats-container">
        {" "}
        <div className="stat-card">
          {" "}
          <div className="stat-icon">📌</div> <h2>{tickets.length}</h2>{" "}
          <p>Total Tickets</p>{" "}
        </div>{" "}
        <div className="stat-card">
          {" "}
          <div className="stat-icon">🔥</div> <h2>1</h2>{" "}
          <p>High Priority</p>{" "}
        </div>{" "}
        <div className="stat-card">
          {" "}
          <div className="stat-icon">⏳</div> <h2>{pendingTickets.length}</h2>{" "}
          <p>Pending</p>{" "}
        </div>{" "}
        <div className="stat-card">
          {" "}
          <div className="stat-icon">✅</div> <h2>{openTickets.length}</h2>{" "}
          <p>Completed</p>{" "}
        </div>{" "}
      </div>{" "}
      {/* Kanban Board */}{" "}
      <div className="board">
        {" "}
        <div className="column">
          {" "}
          <div className="column-header">
            {" "}
            <h3>Open</h3>{" "}
            <span className="ticket-count"> {openTickets.length} </span>{" "}
          </div>{" "}
          <div className="column-body">
            {" "}
            {openTickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} onClick={onTicketClick} />
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="column">
          {" "}
          <div className="column-header">
            {" "}
            <h3>Pending</h3>{" "}
            <span className="ticket-count"> {pendingTickets.length} </span>{" "}
          </div>{" "}
          <div className="column-body">
            {" "}
            {pendingTickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} onClick={onTicketClick} />
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="column">
          {" "}
          <div className="column-header">
            {" "}
            <h3>Closed</h3> <span className="ticket-count"> 0 </span>{" "}
          </div>{" "}
          <div className="column-body">
            {" "}
            <p className="empty-text"> No closed tickets </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Dashboard;
