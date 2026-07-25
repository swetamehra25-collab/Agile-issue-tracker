import "../styles/components.css";
import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">
        <FaTasks className="stat-icon" />
        <h2>24</h2>
        <p>Total Tickets</p>
      </div>

      <div className="stat-card">
        <FaClock className="stat-icon" />
        <h2>8</h2>
        <p>To Do</p>
      </div>

      <div className="stat-card">
        <FaSpinner className="stat-icon" />
        <h2>10</h2>
        <p>In Progress</p>
      </div>

      <div className="stat-card">
        <FaCheckCircle className="stat-icon" />
        <h2>6</h2>
        <p>Completed</p>
      </div>

    </section>
  );
}

export default Stats;