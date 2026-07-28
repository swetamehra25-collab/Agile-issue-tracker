import { useState } from "react";
import "../styles/pages.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ticketApi from "../api/ticketApi";


function CreateTicket(){


const queryClient = useQueryClient();



const [ticket,setTicket] = useState({

title:"",
description:"",
priority:"Medium",
assignee:"",
status:"todo"

});




const createMutation = useMutation({

mutationFn: ticketApi.createTicket,


onSuccess:()=>{


queryClient.invalidateQueries({

queryKey:["tickets"]

});


alert("Ticket Created");


setTicket({

title:"",
description:"",
priority:"Medium",
assignee:"",
status:"todo"

});


}


});





const handleChange=(e)=>{


setTicket({

...ticket,

[e.target.name]:e.target.value

});


};





const handleSubmit=(e)=>{


e.preventDefault();


createMutation.mutate(ticket);


};





return(


<div className="create-ticket">


<h1>Create Ticket</h1>




<form onSubmit={handleSubmit}>



<input

name="title"

placeholder="Ticket Title"

value={ticket.title}

onChange={handleChange}

/>




<textarea

name="description"

placeholder="Description"

value={ticket.description}

onChange={handleChange}

/>




<select

name="priority"

value={ticket.priority}

onChange={handleChange}

>


<option>High</option>

<option>Medium</option>

<option>Low</option>


</select>




<input

name="assignee"

placeholder="Assignee"

value={ticket.assignee}

onChange={handleChange}

/>




<button type="submit">

{
createMutation.isPending
?
"Creating..."
:
"Create Ticket"
}

</button>



</form>



</div>


);


}


export default CreateTicket;