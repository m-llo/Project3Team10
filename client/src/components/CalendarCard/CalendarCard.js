import React from "react";
import "./calendarStyle.css";
import { Link } from "react-router-dom";


function calendarCard ({day}){
return (
<div className="card">
    <div className="cardBody">
        <h2 className="cardTitle">{day.name}</h2>
        <img className="cardImage" src={day.thumbnail} />
        <h2 className="cardTitle">{day.recipeName}</h2>
    </div>
   <Link><button className="btn btn-success p-1" to={day.url} name="view">View</button></Link>
    <button className="btn btn-primary p-1" id={day.id} value={day.ingredients} onClick={handleBtnClick} name="add">Add to List</button>
    <button className="btn btn-danger p-1" id={session.user_id} onClick={handleBtnClick} name="delete">Delete</button>
</div>
)
}


export default calendarCard;
