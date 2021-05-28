import React, { useState } from "react";
import API from "../../utils/API";
import { RecipeSearch, RecipeList } from "../../components/RecipeSearch";


function Search() {
    const [recipes, setRecipes] = useState();
    const [recipeSearch, setRecipeSearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setRecipeSearch(value);
  };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getRecipes(recipeSearch)
            .then(res => setRecipes(res.data))
            .catch(err => console.log(err));
  };
  return (
    <div>
        <h1 className="text-center">Search For Recipes!</h1>
 
        <form className="search">
            <div className="form-group">
                <input
                    value={recipeSearch}
                    onChange={handleInputChange}
                    name="RecipeSearch"
                    type="text"
                    placeholder="Type in a Cuisine Type or Main Ingredient"
                />
                <button type="success" onClick={handleFormSubmit} className="input-lg">
                    Search
                </button>
            </div>
        </form>
        ) : (
        <RecipeSearch>
            console.log(recipes)
            {recipes.map(recipe => {
                return (
                    <RecipeList
                        key={recipe.title}
                        title= {recipe.title}
                        url={recipe.url}
                        ingredients={recipe.ingredients}
                        // thumbnail={recipe.thumbnail}
                    />
                );
            })}
        </ RecipeSearch>
      </div>
    );
}
export default Search;
