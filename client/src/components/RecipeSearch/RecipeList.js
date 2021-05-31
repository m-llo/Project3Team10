import React from "react";
import Button from "../../components/Button/index";
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_FAVORITE } from "../../utils/actions";
import API from "../../utils/API";

function RecipeList({
    image,
    label,
    url,
    ingredients,
    handleInputSave
  }) {
 
//  const [recipeData, setRecipeData] = useState= {
//    image: image, 
//    label: label,
//    url: url,
//    ingredients: ingredients
//  }

    return (                       
      <li className="list-group-item">
        <div className="col-sx-4 sm-2">
              <img src={image} alt="recipe" ></img>
        </div>
        <div className="col-xs-8 sm-9">
              <h3>{label}</h3>
              <li>Ingredients: {ingredients}</li>
              <a rel="noreferrer noopener" target="_blank" href={url}>
                Go to recipe!
              </a>
              <button type="success" image= {image} ingredients={ingredients} url={url} label={label} onClick={(e) => handleInputSave(e)} className="input-sm">
                    ❤️ Add to Favorites
              </button> 
         </div> 
      </li>
    );
    }
  
export default RecipeList;