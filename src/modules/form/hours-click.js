export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")
    
    hours.forEach( (available ) =>{
        available.addEventListener("click", (selected) =>{

            // remove class hour-selected of all non selected li
            hours.forEach((hour) =>{
                hour.classList.remove("hour-selected")
            })

            // add class hour selected on clicked li
            selected.target.classList.add("hour-selected")

        })
    })
}