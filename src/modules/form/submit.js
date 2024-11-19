import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

//today date for input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//get actual date
selectedDate.value = inputToday

//set min date to actual date
selectedDate.min = inputToday


form.onsubmit = async (e) => {
    e.preventDefault()

    try{
        //getting client name
        const name = clientName.value.trim()

        if(!name){
            return alert("Informe o nome do cliente!")
        }

        //getting selected time
        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            return alert("Selecione a hora")
        }

        //getting only the hour
        const [hour] = hourSelected.innerText.split(":")

        //put hour on date
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // generate an ID
        const id = new Date().getTime()

        // do the appointment
        await scheduleNew({
            id,
            name,
            when
        })

        // recharge after appointment
        await schedulesDay()

        // clear input name of client
        clientName.value = ""
    } catch(e){

        alert("Não foi possível realizar o agendamento")
    }
}