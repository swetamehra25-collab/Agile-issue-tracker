import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Navbar from "./Navbar";
import Stats from "./Stats";
import Column from "./Column";
import TicketModal from "./TicketModal";

import ticketApi from "../api/ticketApi";
import "../styles/pages.css";


function Board() {

  const [selectedTicket, setSelectedTicket] = useState(null);


  const {
    data: tickets = [],
    isLoading,
    isError
  } = useQuery({

    queryKey: ["tickets"],

    queryFn: ticketApi.getTickets

  });



  const onTicketClick = (ticket) => {

    setSelectedTicket(ticket);

  };



  if(isLoading){

    return (
      <h2 className="loading">
        Loading Tickets...
      </h2>
    );

  }



  if(isError){

    return (
      <h2 className="error">
        Error loading tickets
      </h2>
    );

  }



  return (

    <div className="dashboard-page">


      <Navbar />


      <Stats />



      <div className="board">


        <Column

          title="📝 To Do"

          tickets={
            tickets.filter(
              (ticket)=> ticket.status === "todo"
            )
          }

          onTicketClick={onTicketClick}

        />



        <Column

          title="🚀 In Progress"

          tickets={
            tickets.filter(
              (ticket)=> ticket.status === "progress"
            )
          }

          onTicketClick={onTicketClick}

        />



        <Column

          title="✅ Done"

          tickets={
            tickets.filter(
              (ticket)=> ticket.status === "done"
            )
          }

          onTicketClick={onTicketClick}

        />


      </div>




      {
        selectedTicket && (

          <TicketModal

            ticket={selectedTicket}

          />

        )
      }



    </div>

  );

}


export default Board;