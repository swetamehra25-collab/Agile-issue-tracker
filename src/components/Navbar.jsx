import { FaSearch, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/components.css";

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="brand-section">
        <div className="logo-box">
          SF
        </div>

        <div className="brand-text">
          <h2>SprintFlow</h2>
          <p>Agile Issue Tracker</p>
        </div>
      </div>

      {/* Search */}
      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search by title, description or priority..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right Side */}
      <div className="navbar-actions">
        <Link
          to="/create-ticket"
          className="create-btn"
        >
          + Create Ticket
        </Link>

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