import React from "react";
import "./calendarStyle.css";
import { Link } from "react-router-dom";
// {plan.map(day =>< CalendarCard data={day} btn={handleBtnClick} /> )}

function calendarCard ({data, btn}){
return (

<div className="card">
    <div className="cardBody">
        <h2 className="cardTitle">{data.name}</h2>
        <img className="cardImage" src={data.thumbnail} />
        <h2 className="cardTitle">{data.recipeName}</h2>
    </div>
    <div className="row">
        <div className="col-sm-4">
   <Link><button className="btn btn-success p-1" to={data.url} name="view">View</button></Link>
   </div>
   <div className="col-sm-4">
    <button className="btn btn-primary p-1" id={data.id} value={data.ingredients} onClick={btn.handleBtnClick} name="add">Add to List</button>
    </div>
    <div className="col-sm-4">
    <button className="btn btn-danger p-1" id={""} onClick={btn.handleBtnClick} name="delete">Delete</button>
    </div>
    </div>
</div>
)
}


export default calendarCard;
