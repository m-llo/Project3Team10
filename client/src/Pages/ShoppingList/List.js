import React from "react";
import Hero from "../../components/Hero/index"
import { Link, useLocation } from "react-router-dom";
import IngredientList from "../../components/IngredientList";


function ShoppingList() {
  
  // const saveIngredients = event => {
  // const ingredients = event.target.getAttribute("ingredients")
  // const userId = event.target.getAttribute("userId")
  // console.log(ingredients)
  //   API.getIngredients({
  //     userId,
  //     ingredients
  // })
  // .then(res => {
  //     console.log(ingredients + "successfully added");
  //        window.location.reload()
  // })
  // .catch(err => console.log(err))
  // }
  // {
    const location = useLocation();
  return (
    <div>
      <div className="col-lg text-center">
        <Link to="/search" className={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Get Recipes</button></Link>
        <Link to="/" className={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Home</button></Link>
        <Link to="/plan" className={location.pathname === "/plan"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Manage Meal Plan</button></Link>
      </div>
      <Hero />
      {}
        <IngredientList 
          // saveIngredients = {saveIngredients}
        />
    </div>
  )
  }
// };
export default ShoppingList;