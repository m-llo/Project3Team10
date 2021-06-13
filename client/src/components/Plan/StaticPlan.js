import React from "react";
import "./calendarStyle.css";
import { Link } from "react-router-dom";

function StaticPlanCards({ data, addbtn, delbtn }) {
    
    
    // if saved plan exist in database will set the calendar to the recipes state then populate the calendar fields
    return (
        <div className="p-2">
            <p className="cardTitle fw-normal fs-6" name="intstructions">You don't have a plan yet.<br></br> Select recipes from your favorites to build your plan!</p>
            <div className="card p-1 ">
                <h3 className="cardTitle fs-2 fw-normal" name="Sunday">Sunday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5>
                </div>
                {/* <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={data.userId} value={""} onClick={""} name="add">Add to Shopping List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={data.id} label={data.recipe.label} onClick={(event)=> delbtn(event)} name="delete">Remove from Plan</button>
                    </div>
                </div> */}
            </div>
            <div className="card p-1 ">
                <h3 className="cardTitle fs-2 fw-normal" name="Monday">Monday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5>
                </div>
                {/* <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div> */}
            </div>
            <div className="card p-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Tuesday">Tuesday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5>
                </div>
                {/* <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div> */}
            </div>
            <div className="card p-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Wednesday">Wednesday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5>
                </div>
                {/* <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div> */}
            </div>
            <div className="card p-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Thursday">Thursday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5>
                </div>
                {/* <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div> */}
            </div>
            <div className="card p-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Friday">Friday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5>
                </div>
                {/* <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div> */}
            </div>
            <div className="card p-1">
                <h3 className="cardTitle fs-2 fw-normal" name="Saturday">Saturday</h3>
                <img className="cardImage card-im-top" src={""} />
                <div className="cardBody card-body">
                    <h5 className="cardTitle card-title align-content-start fs-2 display-6 " target="_blank"></h5>
                </div>
                {/* <div className="row justify-items-around">
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} value={""} onClick={""} name="add">Add to List</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-warning p-1 .text-wrap" id={""} onClick={""} name="delete">Remove from Plan</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default StaticPlanCards;

