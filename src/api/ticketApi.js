import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const getTickets = async () => {
  const response = await API.get("/tickets");
  return response.data;
};