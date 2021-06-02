import React, {useEffect, useState } from "react";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero/index"
import PlanCards from "../../components/Plan/Days"
import SavedRecipes from "../../components/Plan/SavedRecipes"


function Plan() {
    const location = useLocation();
    const id = ""
 
    const [plan, setPlan] = useState([])
    const [recipes, setRecipes]= useState([])

    useEffect(()=>{
        API.getCalendar(id)
        .then((res) =>{setPlan(res); console.log("plan", plan)})
        .catch(err => console.log(err));

        API.getRecipesByUser(id)
        .then((res) =>{setRecipes(res); console.log("recipes", recipes)})
        .catch(err => console.log(err));

    }, [])
 
    const handleInputSave = event => {
        
        const ingredients = event.target.getAttribute("ingredients")
        console.log(ingredients)
        API.addIngredients ({
          id: id,
          ingredients: ingredients,
        
        })
        .then(res => console.log("success"))
        .catch(err => console.log(err))
      }; 
 


    return (
        <div>
            <div className= "col- lg text-center">
          <Link to="/" className={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Go Home</button></Link>
          <Link to="/search" className={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4 ">Search for Recipes</button></Link>
          <Link to="/list" className={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">My Shopping List</button></Link>
           
       </div>
            <Hero />
        <div className="wrapper">
            <div className="col-6">
            <PlanCards data={plan} btn={handleInputSave} />
            </div>
            <div className="col-6">
            {recipes.map(recipe => <SavedRecipes data={recipe} btn={handleInputSave} />)} 
            </div>
        </div>
        </div>
    )
}



export default Plan;