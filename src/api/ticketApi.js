const BASE_URL = "http://localhost:3001/tickets";

// Get All Tickets
async function getTickets() {

    const response = await fetch(BASE_URL);

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

    return response.json();

}

// ⭐ Day 5 - Update Ticket Status
async function updateTicketStatus(id, status) {

    const response = await fetch(`${BASE_URL}/${id}`, {

        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            status
        })

    });

    return response.json();

}

export default {

    getTickets,

    createTicket,

    updateTicketStatus

};