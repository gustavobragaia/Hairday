import dayjs from "dayjs"

// select the appointments by morning, afternoon and night
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow( { dailySchedules }){

    try{

        // clean lists
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        // render appointments by period
        dailySchedules.forEach( (schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            // add id on appointment
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            // create icon to cancel appointment
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            // add time, name and icon on a item
            item.append(time, name, cancelIcon)

            // get just the hour
            const hour = dayjs(schedule.when).hour()

            // render the appointment on section
            if (hour <= 12){
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18){
                periodAfternoon.appendChild(item)
            } else if (hour > 18){
                periodNight.appendChild(item)
            }
        })
    } catch(e){
        alert("Não foi possível exibir os agendamentos")
    }
}