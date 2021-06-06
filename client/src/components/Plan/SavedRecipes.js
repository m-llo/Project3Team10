import React from "react";



function savedRecipeList({data, ref , saveToPlan, delBtn}){
return (
<div className="p-1 m-1">
<h6 className=" fw-normal">{data.label}</h6>
    <div className="row">
   <div className="col">
    <input placeholder="Enter a Day of Week" ref={ref}></input>
    </div>
    <div className="">
    <button className="btn btn-outline-success btn-sm .text-wrap"  id={data.id} label={data.label} url={data.url} image={data.image} ingredients={data.ingredients} onClick={(event) => saveToPlan(event)} name="add">Add to Plan</button>
    <button className="btn btn-outline-danger  btn-sm" id={data.id} onClick={delBtn} name="delete">Remove</button>
    </div>
    </div>
</div>
)
}


export default savedRecipeList;