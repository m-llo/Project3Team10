import React from "react";
import "./calendarStyle.css";
import { Link } from "react-router-dom";
// {plan.map(day =>< CalendarCard data={day} btn={handleBtnClick} /> )}

function calendarCard ({data, btn}){
    console.log(data)
return (

<div className="card p-1 m-1">
<h3 className="cardTitle fs-2 fw-normal">{data.recipe.label}</h3>
<img className="cardImage card-im-top" src={data.recipe.thumbnail} />
    <div className="cardBody card-body">
     <Link to={data.url} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 "  target="_blank">{data.recipe.label}</h5></Link>   
    </div>
    <div className="row justify-items-around">
   <div className="col">
    <button className="btn btn-outline-warning p-1 .text-wrap"  id={data.id} value={data.recipe.ingredients} onClick={btn.handleBtnClick} name="add">Add to List</button>
    </div>
    <div className="col">
    <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={btn.handleBtnClick} name="delete">Remove from Calendar</button>
    </div>
    </div>
</div>
)
}


export default calendarCard;
