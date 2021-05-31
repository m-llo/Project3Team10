import React from "react";
import API from "../../utils/API";
import Hero from "../../components/Hero/index"
import { Link, useLocation } from "react-router-dom";

function ShoppingList({
    label,
    ingredients

}) {

const location = useLocation();
  return (
    <div>
         <div className="col-lg text-center">
            <Link to="/search" className={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Search for Recipe's</button></Link>
            <Link to="/" className={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Go Home</button></Link>
            <Link to="/plan" className={location.pathname === "/plan"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Manage Meal Plan</button></Link>
        </div>
        <Hero />
        <h1 className="text-center">Ingredients</h1>
        <li className="list-group-item">
    
              
        <div className="col-xs-8 sm-9">
              <h3>{label}</h3>
              <p>{ingredients}</p>
             
         </div> 
      </li>
    </div>
)
  }
  export default ShoppingList;