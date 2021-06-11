import React from "react";

function RecipeList({
  image,
  label,
  url,
  ingredients,
  handleInputSave
}) 
{
  return (                       
    <li className="list-group-item text-center">
      <div className="col-sx-4 sm-2">
        <img src={image} alt="recipe" ></img>
      </div>
      <div className="col-xs-8 sm-9">
        <h3>{label}</h3>
        <ol>Ingredients: {ingredients}</ol>
          <a rel="noreferrer noopener" target="_blank" href={url}>
            Go to recipe!
          </a>
          <br></br>
            <button type="success" image= {image} ingredients={ingredients} url={url} label={label} onClick={(e) => handleInputSave(e)} className="btn-sm btn-warning">
              ❤️ Add to My Recipes
            </button> 
      </div> 
    </li>
  );
}
  
export default RecipeList;