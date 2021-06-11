import React from "react";
// import RecipeSearch from "../RecipeSearch/RecipeSearch";

function IngredientList({ ingredients }) 
{
  return (                       
    <div className="container">
      <div className="col-12">
        <ul>
          <div className="text-center display-4">Ingredients:</div> 
          <li>{ingredients}</li>
        </ul>
      </div>
    </div>
  )  
};
  
  
export default IngredientList;