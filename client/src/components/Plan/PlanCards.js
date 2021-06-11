import React from "react";
import "./calendarStyle.css";
import { Link } from "react-router-dom";

function PlanCards(props) {
    return (
        <div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal"  name="day">{props.day}</h3>
                <img className="cardImage card-im-top align-content-center" height="300px" width="350px"src={props.image} alt="finished recipe" />
                <div className="cardBody card-body">
                    <Link to={props.url} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank">{props.label}</h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={props.userId} value={props.ingredients} onClick={(event)=> props.addbtn(event)} name="add">Add to Shopping List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={props.id} label={props.label} onClick={(event)=> props.delbtn(event)} name={props.key}>Remove from Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PlanCards;

