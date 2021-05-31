import React from "react";
import Button from "../../components/Button/index";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_FAVORITE } from "../../utils/actions";

function RecipeList({
    image,
    label,
    url,
    ingredients
  }) {
  const [recipes, dispatch] = useStoreContext();
  const addRecipe = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: recipes.label
    });
  };
  
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
              <Button type="success" onClick={addRecipe} className="input-sm">
                    ❤️ Add to Favorites
              </Button> 
         </div> 
      </li>
    );
    }
  
export default RecipeList;