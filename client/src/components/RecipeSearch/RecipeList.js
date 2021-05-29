import React from "react";

export function RecipeList({
    thumbnail,
    title,
    ingredients,
    href
  }) {
    return (                       
      <li className="list-group-item">
        <div className="col-sx-4 sm-2">
              <image src={thumbnail || "https://placehold.it/300x300"} ></image>
        </div>
        <div className="col-xs-8 sm-9">
              <h3>{title}</h3>
              <p>Ingredients: {ingredients}</p>
              <a rel="noreferrer noopener" target="_blank" href={href}>
                Go to recipe!
              </a>
         </div> 
      </li>
    );
  }
  
export default RecipeList;