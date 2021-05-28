import React from "react";

export function RecipeList({
    thumbnail,
    title,
    ingredients,
    href
  }) {
    return (                       
      <li className="list-group-item">
              <image src={thumbnail || "https://placehold.it/300x300"} ></image>
              <h3>{title}</h3>
              <p>Ingredients: {ingredients}</p>
              <a rel="noreferrer noopener" target="_blank" href={href}>
                Go to recipe!
              </a>
          
      </li>
    );
  }
  
  export default RecipeList