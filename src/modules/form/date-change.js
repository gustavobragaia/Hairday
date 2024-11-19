import {schedulesDay} from "../schedules/load"

//select data input
const selectedDate = document.getElementById("date")

// load the time list when date input change
selectedDate.onchange = () => schedulesDay()