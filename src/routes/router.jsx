import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import CreateTicket from "../pages/CreateTicket";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },


  {
    path: "/create-ticket",
    element: <CreateTicket />,
  }

]);


export default router;