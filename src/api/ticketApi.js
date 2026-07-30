const BASE_URL = "https://agile-issue-tracker.onrender.com/tickets";

// Get All Tickets
async function getTickets() {

    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to load tickets");
    }

    return response.json();

}

// Create Ticket
async function createTicket(ticket) {

    const response = await fetch(BASE_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(ticket)

    });

    if (!response.ok) {
        throw new Error("Failed to create ticket");
    }

    return response.json();

}

// Update Ticket Status
async function updateTicketStatus(id, status) {

    const response = await fetch(`${BASE_URL}/${id}`, {

        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ status })

    });

    if (!response.ok) {
        throw new Error("Failed to update ticket");
    }

    return response.json();

}

// Delete Ticket
async function deleteTicket(id) {

    const response = await fetch(`${BASE_URL}/${id}`, {

        method: "DELETE"

    });

    if (!response.ok) {
        throw new Error("Failed to delete ticket");
    }

    return true;

}

export default {

    getTickets,
    createTicket,
    updateTicketStatus,
    deleteTicket

};