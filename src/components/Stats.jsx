import "../styles/components.css";

import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

function Stats({ tickets }) {
  const totalTickets = tickets.length;

  const todoCount = tickets.filter(
    (ticket) => ticket.status === "todo"
  ).length;

  const progressCount = tickets.filter(
    (ticket) => ticket.status === "progress"
  ).length;

  const completedCount = tickets.filter(
    (ticket) => ticket.status === "done"
  ).length;

  const statsData = [
    {
      icon: <FaTasks />,
      number: totalTickets,
      title: "Total Tickets",
    },
    {
      icon: <FaClock />,
      number: todoCount,
      title: "To Do",
    },
    {
      icon: <FaSpinner />,
      number: progressCount,
      title: "In Progress",
    },
    {
      icon: <FaCheckCircle />,
      number: completedCount,
      title: "Completed",
    },
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div
          className="stat-card"
          key={index}
        >
          <div className="stat-icon">
            {stat.icon}
          </div>

          <h2>{stat.number}</h2>

          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;