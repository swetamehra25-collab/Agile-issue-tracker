import { useState, useCallback } from "react";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import Navbar from "./Navbar";
import Stats from "./Stats";
import Column from "./Column";
import TicketModal from "./TicketModal";

import ticketApi from "../api/ticketApi";
import "../styles/pages.css";

function Board() {

  const [selectedTicket, setSelectedTicket] = useState(null);

  const queryClient = useQueryClient();

  const {
    data: tickets = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: ticketApi.getTickets,
  });

  // -----------------------------
  // Optimistic UI (Day 5)
  // -----------------------------

  const updateMutation = useMutation({

    mutationFn: ({ id, status }) =>
      ticketApi.updateTicketStatus(id, status),

    onMutate: async ({ id, status }) => {

      await queryClient.cancelQueries({
        queryKey: ["tickets"],
      });

      const previousTickets =
        queryClient.getQueryData(["tickets"]);

      queryClient.setQueryData(
        ["tickets"],
        (oldTickets) =>

          oldTickets.map((ticket) =>

            ticket.id === id
              ? { ...ticket, status }
              : ticket

          )

      );

      return { previousTickets };

    },

    onError: (error, variables, context) => {

      queryClient.setQueryData(
        ["tickets"],
        context.previousTickets
      );

    },

    onSettled: () => {

      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });

    },

  });

  // -----------------------------
  // Move Ticket
  // -----------------------------

const moveTicket = useCallback((ticket) => {

  let nextStatus = "";

  if (ticket.status === "todo") {

    nextStatus = "progress";

  }

  else if (ticket.status === "progress") {

    nextStatus = "done";

  }

  else if (ticket.status === "done") {

    nextStatus = "todo";

  }

  updateMutation.mutate({

    id: ticket.id,

    status: nextStatus,

  });

}, 
[updateMutation]);

 const onTicketClick = useCallback((ticket) => {

  setSelectedTicket(ticket);

}, []);

  if (isLoading) {

    return (
      <h2 className="loading">
        Loading Tickets...
      </h2>
    );

  }

  if (isError) {

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
              (ticket) => ticket.status === "todo"
            )
          }
          onTicketClick={onTicketClick}
          moveTicket={moveTicket}
        />

        <Column
          title="🚀 In Progress"
          tickets={
            tickets.filter(
              (ticket) => ticket.status === "progress"
            )
          }
          onTicketClick={onTicketClick}
          moveTicket={moveTicket}
        />

        <Column
          title="✅ Done"
          tickets={
            tickets.filter(
              (ticket) => ticket.status === "done"
            )
          }
          onTicketClick={onTicketClick}
          moveTicket={moveTicket}
        />

      </div>

      {selectedTicket && (

        <TicketModal
          ticket={selectedTicket}
        />

      )}

    </div>

  );

}

export default Board;