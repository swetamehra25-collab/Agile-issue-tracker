import { FaSearch, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/components.css";


function Navbar() {


  return (

    <nav className="navbar">


      <div className="brand-section">


        <div className="logo-box">
          SF
        </div>


        <div className="brand-text">

          <h2>
            SprintFlow
          </h2>

          <p>
            Agile Issue Tracker
          </p>

        </div>


      </div>





      <ul className="nav-links">


        <li className="active">
          Dashboard
        </li>


        <li>
          My Tasks
        </li>


        <li>
          Teams
        </li>


        <li>
          Reports
        </li>


      </ul>





      <div className="navbar-actions">


        <div className="search-box">

          <FaSearch />

          <input

            type="text"

            placeholder="Search tickets..."

          />

        </div>





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