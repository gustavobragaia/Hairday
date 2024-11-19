import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLouad } from "../form/hours-load";
import { schedulesShow } from "./show";

// select data input
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    const date = selectedDate.value

    //search on api the appointments
    const dailySchedules = await scheduleFetchByDay( { date })

    // render appointments
    schedulesShow( { dailySchedules } )

    // render available hours
    hoursLouad( { date, dailySchedules })
}