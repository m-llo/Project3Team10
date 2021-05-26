import React, { useEffect, componentDidMount, useState }  from "react";
import CalendarCard from "../CalendarCard/CalendarCard"
import API from "../../utils/API";
import CalendarDeleteBtn from "./CalendarDeleteBtn"
import CalendarCreatePrompt from "./CalendarCreatePrompt"

function Calendar()  {
    const[calendar, setCalendar]= useState()

   componentDidMount(() =>{
        API.getCalendar(session.user_id).then((res)=>{
            setCalendar(res)
        })
    
    }, []);   

if(!calendar){ 
return(
<CalendarCreatePrompt />
)
}

 const handleBtnClick = event => {
    if(event.target.name === "add"){
         API.addToList(event.target.id, event.target.value)
   }
    if(event.target.name === "delete"){
        API.deleteFromCalendar(event.target.id)
   }
    else{
       API.deleteCalendar(event.target.id)

   }

 };

     return (
     <div className="wrapper">
       <CalendarDeleteBtn data={calendar} handleBtnClick={handleBtnClick} />
    {calendar.map(day =>< CalendarCard data={day} /> )}
    </div>
    
      );    
  

}








export default Calendar;