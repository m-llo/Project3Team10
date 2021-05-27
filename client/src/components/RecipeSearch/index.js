import React from "react";
// import Thumbnail from "../Thumbnail";

// RecipeList renders a bootstrap list item
export function RecipeSearch({ children }) {
  return <ul className="list-group">{children}</ul>;
}
                                                                                                                          
// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeList({
  // thumbnail,
  title,
  ingredients,
  url
}) {
  return (                       
    <li className="list-group-item">
            {/* <Thumbnail src={thumbnail || "https://placehold.it/300x300"} /> */}
            <h3>{title}</h3>
            <p>Ingredients: {ingredients}</p>
            <a rel="noreferrer noopener" target="_blank" url={url}>
              Go to recipe!
            </a>
        
    </li>
  );
}
