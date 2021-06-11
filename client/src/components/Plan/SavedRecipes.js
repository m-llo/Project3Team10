import React from "react";

function savedRecipeList(props){
    let { ref, saveToPlan, delBtn, handleInput, viewIngredients} = props;
return (
<div className="p-1 m-1">
    <h5 className=" fw-normal">{props.label}</h5>
    <div className="row">
        <div className="col">
            <p>Enter the day you want to eat this, then click Add to plan!</p>
            <div className="col-sx-4 sm-2">
              <img src={props.image} alt="recipe" ></img>
            </div>
            <input placeholder="Which day to you want this?" id={props.id} label={props.label} onChange={e => handleInput(e.target.value)} ref={ref}></input>
        </div>
        <div className="">
            <button className="btn btn-outline-warning btn-sm .text-wrap"  id={props.id} label={props.label} url={props.url} image={props.image} ingredients={props.ingredients} onClick={(event) => saveToPlan(event)} name="add">Add to Plan</button>
            <button className="btn btn-outline-success btn-sm .text-wrap"  id={props.id} label={props.label} url={props.url} image={props.image} ingredients={props.ingredients} onClick={(event) => viewIngredients(event)} name="add">View Ingredients</button>
            <button className="btn btn-outline-danger  btn-sm" id={props.id} onClick={delBtn} name="delete">Remove</button>
        </div>
    </div>
</div>
)
}

export default savedRecipeList;