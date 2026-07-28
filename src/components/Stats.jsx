import "../styles/components.css";

import {
  FaTasks,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";


function Stats() {


  const statsData = [

    {
      icon: <FaTasks />,
      number: 24,
      title: "Total Tickets"
    },

    {
      icon: <FaClock />,
      number: 8,
      title: "To Do"
    },

    {
      icon: <FaSpinner />,
      number: 10,
      title: "In Progress"
    },

    {
      icon: <FaCheckCircle />,
      number: 6,
      title: "Completed"
    }

  ];



  return (

    <div className="stats-container">


      {
        statsData.map((stat, index)=>(


          <div 
            className="stat-card"
            key={index}
          >


            <div className="stat-icon">

              {stat.icon}

            </div>


            <h2>
              {stat.number}
            </h2>


            <p>
              {stat.title}
            </p>


          </div>


        ))
      }


    </div>

  );

}


export default Stats;