import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLouad( { date, dailySchedules }){

    // clean list of available schedules
    hours.innerHTML = ""

    //getting a list with all unavailable hours
    const unavailableHours = dailySchedules.map( (schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) =>{

        // get only the hour
        const [scheduleHour, ] = hour.split(":")

        // add hour on date and verify if is on past
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast
        
        return{
            hour,
            available
    }
})


    // render times
    opening.forEach(({ hour, available}) =>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } 
        else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } 
        else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })
    
    // add click event on available hour
    hoursClick()

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}}