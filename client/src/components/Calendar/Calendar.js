import React, { useEffect, useState}  from "react";
import CalendarCard from "../CalendarCard/CalendarCard"
import API from "../../utils/API";
import CalendarManagePrompt from "./CalendarManagePrompt"

function Calendar () {
   const [plan, setPlan] = useState({})
    useEffect(()=> {
        // const userId = "60c42726807d563e28df18c7"

    //    const calendarId = "60c42726807d563e28df18c7"
      const userId = "60c664baac01b13e4c5d569b";
      
      API.createCalendar()
      .then((res) => { console.log("res", res); 
                             console.log("res.data", res.data); 
                             console.log("calendar id", res.data._id); 
                             setPlan(res.data) })
      .catch(err => console.log(err))
     
    //   API.getCalendar(userId)
    //     .then((res) => { console.log("res", res); console.log("res.data[0]", res.data[0]); setPlan(res.data[0])})
    //     .catch(err => console.log(err));
     
    //  if (!calendar){
    //     console.log("building calendar")
    //     API.createCalendar(userId)
    //     .then((res) => { console.log("res", res); console.log("res.data[0]", res.data[0]); setPlan(res.data[0]) })
    //     .catch(err => console.log(err))
    // }
        
    }, [])

   console.log("plan1", plan)
   console.log("plan1 calendar id", plan._id)

    function getCalendar () {
        // preloaded data
        const calendarId = "60c42726807d563e28df18c7";
        // new user calendar id
        // const planId= plan._id
        API.getCalendar(calendarId)
        .then((res) => { console.log("res", res); 
                           console.log("res.data[0]", res.data[0]); 
                            setPlan(res.data[0])})
        .catch(err => console.log(err));
    }
    
    
    getCalendar()
   console.log("plan2", plan)



//    console.log("plan.sunday", plan.sunday)
//    console.log("plan.saturday", plan.saturday)
//    console.log("plan.sunday.day", plan.sunday.day)
//    console.log("plan.saturday.day", plan.saturday.day)
    return (
        <div className="wrapper px-4">
            <div className="row justity-content-end">
                <div className="col-md-12 display-2 text-center">
                    My Meal Plan
                </div>
                <div className="align-content-center">
                 <CalendarManagePrompt/>
             </div>
        {plan.hasOwnProperty("sunday") ? ( 
                <div className="card-group">
                    <CalendarCard day={plan.sunday.day} ingredients={plan.sunday.ingredients} label={plan.sunday.label} url={plan.sunday.url} image={plan.sunday.image} userId={plan.userId}/>
                    <CalendarCard day={plan.monday.day} ingredients={plan.monday.ingredients} label={plan.monday.label} url={plan.monday.url} image={plan.monday.image} userId={plan.userId}   />
                    <CalendarCard day={plan.tuesday.day}ingredients={plan.tuesday.ingredients} label={plan.tuesday.label} url={plan.tuesday.url} image={plan.tuesday.image} userId={plan.userId}   />
                    <CalendarCard day={plan.wednesday.day} ingredients={plan.wednesday.ingredients} label={plan.wednesday.label} url={plan.wednesday.url} image={plan.wednesday.image} userId={plan.userId}   />
                    <CalendarCard day={plan.thursday.day}ingredients={plan.thursday.ingredients} label={plan.thursday.label} url={plan.thursday.url} image={plan.thursday.image} userId={plan.userId}   />
                    <CalendarCard day={plan.friday.day} ingredients={plan.friday.ingredients} label={plan.friday.label} url={plan.friday.url} image={plan.friday.image} userId={plan.userId}  />
                    <CalendarCard day={plan.saturday.day} ingredients={plan.saturday.ingredients} label={plan.saturday.label} url={plan.saturday.url} image={plan.saturday.image} userId={plan.userId} id={plan.id} />
                </div>
               
             ) : null
            }
           
            </div>
        </div>
    )  
}








export default Calendar;