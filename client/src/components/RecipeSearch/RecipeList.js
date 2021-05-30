import React from "react";

export function RecipeList({
    image,
    label,
    // ingredients,
    url
  }) {
    return (                       
      <li className="list-group-item">
        <div className="col-sx-4 sm-2">
              <img src={image} alt="recipe" ></img>
        </div>
        <div className="col-xs-8 sm-9">
              <h3>{label}</h3>
              {/* <p>Ingredients: {ingredients}</p> */}
              <a rel="noreferrer noopener" target="_blank" href={url}>
                Go to recipe!
              </a>
         </div> 
      </li>
    );
  }
  
export default RecipeList;