import React from "react";
import "./calendarStyle.css";
import { Link } from "react-router-dom";
// {plan.map(day =>< CalendarCard data={day} btn={handleBtnClick} /> )}

function calendarCard (props){
 
return (

<div className="card p-1 m-1">
<h3 className="cardTitle fs-2 fw-normal">{props.day}</h3>
<img className="cardImage card-im-top" alt="recipes" src={props.image} />
    <div className="cardBody card-body">
     <Link to={props.url} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 "  target="_blank">{props.label}</h5></Link>   
    </div>
    <div className="row justify-items-around">
   {/* <div className="col">
    <button className="btn btn-outline-warning p-1 .text-wrap"  id={data.id} value={data.recipe.ingredients} onClick={btn.handleBtnClick} name="add">Add to List</button>
    </div>
    <div className="col">
    <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={btn.handleBtnClick} name="delete">Remove from Plan</button>
    </div> */}
    </div>
</div>
)
}


export default calendarCard;
