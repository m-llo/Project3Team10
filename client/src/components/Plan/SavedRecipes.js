import React from "react";



function savedRecipeList({data, ref , saveToPlan, delBtn}){
return (
<div className="p-1 m-1">
<h6 className="fs-2 fw-normal">{data.label}</h6>
    <div className="row justify-items-around">
   <div className="col">
    <input placeholder="Day of Week" ref={ref}></input>
    <button className="btn btn-outline-success p-1 .text-wrap"  id={data.id} label={data.label} url={data.url} image={data.image} ingredients={data.ingredients} onClick={() => saveToPlan()} name="add"></button>
    </div>
    <div className="col">
    <button className="btn btn-outline-danger p-1 .text-wrap" id={data.id} onClick={delBtn} name="delete">Remove from Favorites</button>
    </div>
    </div>
</div>
)
}


export default savedRecipeList;