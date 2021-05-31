import React, { useState } from "react";
import API from "../../utils/API";
import RecipeSearch from "../../components/RecipeSearch/RecipeSearch"
import RecipeList from "../../components/RecipeSearch/RecipeList"
import Hero from "../../components/Hero/index"
import { Link, useLocation } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
// import IngredientList from "../../components/IngredientList/index";


function Search() {
    const [recipes, setRecipes] = useState([]);
    const [recipeSearch, setRecipeSearch] = useState("");
    
    const handleInputChange = event => {
        const { value } = event.target;
        setRecipeSearch(value);
  };
  
    const handleFormSubmit = event => {
        event.preventDefault();

        console.log(recipeSearch)
        API.searchRecipes(recipeSearch)
        .then((res) =>{setRecipes(res.data.hits); console.log(recipes, "this is the get");})
        .catch(err => console.log(err));
    }; console.log("are we getting this", recipeSearch)
 
    const handleInputSave = event => {
        const image = event.target.getAttribute("image")
        console.log(image)
        const label = event.target.getAttribute("label")
        console.log(label)
        const ingredients = event.target.getAttribute("ingredients")
        console.log(ingredients)
        const url = event.target.getAttribute("url")
        console.log(url)
        API.saveRecipes ({
          label: label,
          image: image,
          ingredients: ingredients,
          url: url
        })
        .then(res => console.log("success"))
        .catch(err => console.log(err))
      }; 
 
    const location = useLocation();
  return (
    <div>
        <div className= "col- lg text-center">
          <Link to="/plan" className={location.pathname === "/plan"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Manage Meal Plan</button></Link>
          <Link to="/" className={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4 ">Go Home</button></Link>
          <Link to="/list" className={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">My Shopping List</button></Link>
           
       </div>
       <div className="row"></div>
        <Hero />
        
        <h1 className="text-center">Search For Recipes!</h1>
 
        <form className="search">
            <div className="form-group-center">
                <Input
                    value={recipeSearch}
                    onChange={handleInputChange}
                    name="RecipeSearch"
                    type="text"
                    placeholder="Type in a Cuisine Type or Main Ingredient"
                />
                <Button type="success" onClick={handleFormSubmit} className="input-lg">
                    Search
                </Button>
            </div>
        </form>
        {recipes.length > 0 && (<RecipeSearch>
             {console.log("recipe", recipes)}
            {recipes.map(recipe => {
                return (
                    <RecipeList
                        key={recipe.recipe.label}
                        label={recipe.recipe.label}
                        url={recipe.recipe.url}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredientLines}
                        handleInputSave={handleInputSave}>
                       
                    </RecipeList>
                );
            })}
        </RecipeSearch> 
        )}
      </div>
    );
}
export default Search;
