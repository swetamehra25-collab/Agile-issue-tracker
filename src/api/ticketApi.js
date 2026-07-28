const BASE_URL = "http://localhost:3001/tickets";


async function getTickets(){

  const response = await fetch(BASE_URL);

  return response.json();

}



async function createTicket(ticket){

  const response = await fetch(BASE_URL,{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify(ticket)

  });


  return response.json();

}



export default {
  getTickets,
  createTicket
};