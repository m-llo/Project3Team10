import React from "react";
// import RecipeSearch from "../RecipeSearch/RecipeSearch";

function IngredientList({
    data,
    
  }) {
    return (                       
      <div className="list-group-item">
        <div className="col-xs-8 sm-9">
        
              <ul>Ingredients: 
                {data.map(ingredients => <li>{ingredients}</li>)}
              </ul>
 
         </div> 
            </div>
    )  
};
  
  
export default IngredientList;