import React, { useEffect, componentDidMount, useState, useContext }  from "react";
import CalendarCard from "../CalendarCard/CalendarCard"
import API from "../../utils/API";
import CalendarDeleteBtn from "./CalendarDeleteBtn"
import CalendarCreatePrompt from "./CalendarCreatePrompt"
import CalendarContext from "../../utils/CalendarContext";

function Calendar()  {
    const {plan} = useContext(CalendarContext)
    
    
    
    const[calendar, setCalendar]= useState([])

//    componentDidMount(() =>{
//         API.getCalendar(session.user_id).then((res)=>{
//             setCalendar(res)
//         })
    
//     }, []);   

// if(!calendar){ 
// return(
// <CalendarCreatePrompt />
// )
// }
if(!plan){ 
    return(
    <CalendarCreatePrompt />
    )
    }

 function handleBtnClick (event) {
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
      
    {/* {calendar.map(day =>< CalendarCard data={day} /> )} */}
    {/* <CalendarCard data={plan} btn={handleBtnClick} /> */}
    {plan.map(day =>< CalendarCard data={day} btn={handleBtnClick} /> )}
    <div className="row justity-content-start">
        <div className="col-md-4">
    <CalendarDeleteBtn data={plan} handleBtnClick={handleBtnClick} />
    </div>
    </div>
    </div>
    
      )  
  
     
}








export default Calendar;