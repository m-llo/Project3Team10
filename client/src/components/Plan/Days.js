import React, { useEffect, useState, useContext } from "react";
import "./calendarStyle.css";
import { Link } from "react-router-dom";
import CalendarContext from "../../utils/CalendarContext";
import API from "../../utils/API";

function PlanCards({ data, btn }) {
    
    
    // if saved plan exist in database will set the calendar to the recipes state then populate the calendar fields
    return (
        <div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Sunday">Sunday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <Link to={""} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div>
            </div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Monday">Monday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <Link to={""} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div>
            </div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Tuesday">Tuesday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <Link to={""} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div>
            </div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Wednesday">Wednesday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <Link to={""} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div>
            </div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Thursday">Thursday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <Link to={""} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div>
            </div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Friday">Friday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <Link to={""} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div>
            </div>
            <div className="card p-1 m-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Saturday">Saturday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <Link to={""} style={{ textDecoration: 'none' }}><h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5></Link>
                </div>
                <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PlanCards;

