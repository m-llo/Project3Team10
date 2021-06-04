import React, { useEffect, useState, useContext }  from "react";
import CalendarCard from "../CalendarCard/CalendarCard"
import API from "../../utils/API";
import CalendarDeleteBtn from "./CalendarDeleteBtn"
import CalendarCreatePrompt from "./CalendarCreatePrompt"
import CalendarManagePrompt from "./CalendarManagePrompt"
import CalendarContext from "../../utils/CalendarContext";

function Calendar()  {
    const {plan} = useContext(CalendarContext)
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        const id = "";
        const calendar = API.getCalendar(userId)
        .then((res) => { setPlan(res); console.log("plan", plan) })
        .catch(err => console.log(err));

    if(!calendar){ 
            return(
            <CalendarCreatePrompt />
            )
            }
    }, [])
   


//  function handleBtnClick (event) {
//     if(event.target.name === "add"){
//          API.addToList(event.target.id, event.target.value)
//    }
//     if(event.target.name === "delete"){
//         API.deleteFromCalendar(event.target.id)
//    }
//     else{
//        API.deleteCalendar(event.target.id)

//    }

//  };
  
     return (
         <div className="wrapper px-4">
             <div className="row justity-content-end">
                 <div className="col-md-6 display-1">
                     My Meal Plan
                 </div>
                 <div className="card-group">
                     {plan.map(day => < CalendarCard data={day} btn={handleBtnClick} />)}
                 </div>
                 <div className="align-content-center">
                     <CalendarManagePrompt/>
                 </div>
             </div>
         </div>
    
      )  
  
     
}








export default Calendar;