import React from "react";



function savedRecipeList({data, ref , saveToPlan, delBtn, handleInput}){
return (
<div className="p-1 m-1">
<h5 className=" fw-normal">{data.label}</h5>
    <div className="row">
   <div className="col">
    <p>Enter the day you want to eat this, then click Add to plan!</p>
    <input placeholder="Which day to you want this?" id={data.id} label={data.label} url={data.url} image={data.image} ingredients={data.ingredients} onChange={e => handleInput(e.target.value)} ref={ref}></input>
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