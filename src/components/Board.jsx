import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Stats from "./Stats";
import Column from "./Column";

const tickets = [

  {
    id:1,
    title:"Fix Login Bug",
    description:"Login button is not working",
    priority:"High",
    assignee:"Sweta",
    status:"todo",
  },

  {
    id:2,
    title:"Design Navbar",
    description:"Improve navbar UI",
    priority:"Medium",
    assignee:"Rahul",
    status:"progress",
  },

  {
    id:3,
    title:"Payment Integration",
    description:"Complete payment API",
    priority:"High",
    assignee:"Riya",
    status:"done",
  },

];

function Board() {

  return (

    <>

      <Navbar />

      <Dashboard />

      <Stats />

      <div className="board">

        <Column
          title="📝 To Do"
          tickets={tickets.filter(
            (t)=>t.status==="todo"
          )}
        />

        <Column
          title="🚀 In Progress"
          tickets={tickets.filter(
            (t)=>t.status==="progress"
          )}
        />

        <Column
          title="✅ Done"
          tickets={tickets.filter(
            (t)=>t.status==="done"
          )}
        />

      </div>

    </>

  );

}

export default Board;