import React from "react";

function CalendarDeleteBtn(props){
    return(
        <button className="btn btn-danger p-1" id={props.id} onClick={props.handleBtnClick} name="deleteCal">Delete Calendar</button>
    )
}
export default CalendarDeleteBtn
 