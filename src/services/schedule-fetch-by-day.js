import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay( { date } ){
    try{
        //make request
        const response = await fetch(`${apiConfig.baseURL}/schedules`)
    
        // convert to json
        const data = await response.json()

        //filter appointment by selected day
        const dailySchedules = data.filter( (schedule => dayjs(date).isSame(schedule.when, "day")))

        return dailySchedules

    } catch (e){
        alert("Não foi possível buscar os agendamentos do dia selecionado")
    }
}