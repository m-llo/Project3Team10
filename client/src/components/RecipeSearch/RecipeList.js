import React from "react";

export function RecipeList({
    thumbnail,
    label,
    ingredients,
    url
  }) {
    return (                       
      <li className="list-group-item">
        <div className="col-sx-4 sm-2">
              <image src={thumbnail || "https://placehold.it/300x300"} ></image>
        </div>
        <div className="col-xs-8 sm-9">
              <h3>{label}</h3>
              <p>Ingredients: {ingredients}</p>
              <a rel="noreferrer noopener" target="_blank" href={url}>
                Go to recipe!
              </a>
         </div> 
      </li>
    );
  }
  
export default RecipeList;