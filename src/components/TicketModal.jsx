import { useEffect, useRef } from "react";

import "../styles/components.css";


function TicketModal({ ticket }) {


  const modalRef = useRef();



  useEffect(()=>{


    if(ticket){

      modalRef.current.showModal();

    }


  }, [ticket]);




  const closeModal = ()=>{

    modalRef.current.close();

  };



  return (


    <dialog

      ref={modalRef}

      className="ticket-modal"

    >


      <div className="modal-content">


        <h2>
          {ticket.title}
        </h2>



        <p>
          {ticket.description}
        </p>




        <div className="modal-info">


          <span>
            Priority: {ticket.priority}
          </span>


          <span>
            Status: {ticket.status}
          </span>


          <span>
            Ticket ID: #{ticket.id}
          </span>


        </div>




        <button

          className="close-btn"

          onClick={closeModal}

        >

          Close

        </button>



      </div>



    </dialog>

  );

}


export default TicketModal;