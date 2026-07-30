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

  // ==========================
  // Move Ticket (Optimistic UI)
  // ==========================

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

      alert("Failed to move ticket.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });

  // ==========================
  // Delete Ticket
  // ==========================

  const deleteMutation = useMutation({
    mutationFn: ticketApi.deleteTicket,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });

      alert("Ticket Deleted Successfully");
    },

    onError: () => {
      alert("Failed to Delete Ticket");
    },
  });

  // ==========================
  // Move Ticket
  // ==========================

  const moveTicket = useCallback(
    (ticket) => {
      let nextStatus = "";

      if (ticket.status === "todo") {
        nextStatus = "progress";
      } else if (ticket.status === "progress") {
        nextStatus = "done";
      } else {
        nextStatus = "todo";
      }

      updateMutation.mutate({
        id: ticket.id,
        status: nextStatus,
      });
    },
    [updateMutation]
  );

  // ==========================
  // Delete Ticket
  // ==========================

  const deleteTicket = useCallback(
    (id) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this ticket?"
      );

      if (!confirmDelete) return;

      deleteMutation.mutate(id);
    },
    [deleteMutation]
  );

  // ==========================
  // Open Modal
  // ==========================

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

    <Stats tickets={tickets} />

    <div className="board">
      <Column
        title="📝 To Do"
        tickets={tickets.filter(
          (ticket) => ticket.status === "todo"
        )}
        onTicketClick={onTicketClick}
        moveTicket={moveTicket}
        deleteTicket={deleteTicket}
      />

      <Column
        title="🚀 In Progress"
        tickets={tickets.filter(
          (ticket) => ticket.status === "progress"
        )}
        onTicketClick={onTicketClick}
        moveTicket={moveTicket}
        deleteTicket={deleteTicket}
      />

      <Column
        title="✅ Done"
        tickets={tickets.filter(
          (ticket) => ticket.status === "done"
        )}
        onTicketClick={onTicketClick}
        moveTicket={moveTicket}
        deleteTicket={deleteTicket}
      />
    </div>

    {selectedTicket && (
      <TicketModal ticket={selectedTicket} />
    )}
  </div>
);
}

export default Board;