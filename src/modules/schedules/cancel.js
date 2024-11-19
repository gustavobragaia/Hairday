import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"

const periods = document.querySelectorAll(".period")

// generate a click event to each list (morning, afternoon and night)
periods.forEach((period) => {
    period.addEventListener("click", async (e) =>{
        if (e.target.classList.contains("cancel-icon")){
            
            // get the li father of clicked element
            const item = e.target.closest("li")

            // get the id of specific appointment
            const { id } = item.dataset

            // confirm that id was selected
            if (id){
                // confirm if user want to remove
                const isConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")

                if(isConfirm){
                    // requisition on api to remove appointment
                    await scheduleCancel( { id } )

                    // recharge the list of appointments
                    schedulesDay()
                }
            }
        }
    })
})