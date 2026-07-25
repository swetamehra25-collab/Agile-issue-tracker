import { FaSearch, FaBell } from "react-icons/fa";
import "../styles/components.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-box">SF</div>

        <div>
          <h2>SprintFlow</h2>
          <p>Agile Issue Tracker</p>
        </div>
      </div>

      <ul className="nav-links">
        <li className="active">Dashboard</li>
        <li>My Tasks</li>
        <li>Teams</li>
        <li>Reports</li>
      </ul>

      <div className="nav-right">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search tickets..."
          />
        </div>

        <button className="create-btn">
          + Create Ticket
        </button>

        <div className="notification">
          <FaBell />
        </div>

        <div className="profile">
          S
        </div>

      </div>

    </nav>
  );
}

export default Navbar;