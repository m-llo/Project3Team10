import React, { useEffect, useState, useRef } from "react";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero/index"
import PlanCards from "../../components/Plan/PlanCards"
import SavedRecipes from "../../components/Plan/SavedRecipes"
import StaticPlan from "../../components/Plan/StaticPlan"



function Plan() {
    const location = useLocation();
    const inputRef = useRef()
    const userId = ""


    const [plan, setPlan] = useState([])
    const [recipes, setRecipes] = useState([]) 

    useEffect(() => {
       const calendar = API.getCalendar(userId)
            .then((res) => { setPlan(res); console.log("plan", plan) })
            .catch(err => console.log(err));

        if (!calendar){
            console.log("building calendar")
            API.createCalendar(userId)
            .then((res) => { console.log("res", res); console.log("res.data", res.data); setPlan(res.data); console.log("plan", plan) })
            .catch(err => console.log(err))
        }
        // API.getRecipesByUser(id)
        // .then((res) => { setRecipes(res); console.log("recipes", recipes) })
        // .catch(err => console.log(err));
        API.getRecipes()
        .then((res) => {console.log("res", res); console.log("res.data", res.data); setRecipes(res.data); console.log("recipes", recipes) })
        .catch(err => console.log(err));

    }, [])

    function clearfromPlan (event){
        const calendarId = plan.id
        const inputDay = inputRef.current.value
        const planId = calendarId
        const label = event.target.getAttribute("label")
        API.clearFromCalendar({
            id: planId,
            day: inputDay
        })
            //    then refresh page which calls the calendar again and updates the state
            .then(res => {
                console.log(label + "successfully removed");
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    function deleteFromFavs (event){
        const recipeId = event.target.getAttribute("id")
        const label = event.target.getAttribute("label")
        API.deleteRecipe({
            id: recipeId,
        })
            //    then refresh page which calls the calendar again and updates the state
            .then(res => {
                console.log(label + "successfully removed");
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const saveToPlan = event => {
        const calendarId = plan.id
        const image = event.target.getAttribute("image")
        console.log(image)
        const label = event.target.getAttribute("label")
        console.log(label)
        const ingredients = event.target.getAttribute("ingredients")
        console.log(ingredients)
        const url = event.target.getAttribute("url")
        console.log(url)
        const inputDay = inputRef.current.value
        const recipeId = event.target.getAttribute("id")
        const planId = calendarId
        API.updateCalendar({
            id: planId,
            recipeId: recipeId,
            day: inputDay

        })
            //    then refresh page which calls the calendar again and updates the state
            .then(res => {
                console.log(label + "successfully added");
                window.location.reload()
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <div className="col- lg text-center">
                <Link to="/" className={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Go Home</button></Link>
                <Link to="/search" className={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4 ">Search for Recipes</button></Link>
                <Link to="/list" className={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">My Shopping List</button></Link>

            </div>
            <Hero />
            <div className="row">
            <h5 className="col-6 text-center display-6 mb-2">My Plan</h5>
            <h5 className="col-6 text-center display-6 mb-2">My Recipes</h5>
            </div>
            <div className=" row wrapper">
               {
                    plan.length ? (
                        <div className="col-6">
                            {plan.map(day => <PlanCards key={day.name} data={day} addbtn={""} ref={inputRef} delbtn={clearfromPlan} />)}
                        </div>
                    ) : <div className="col-6">
                          <StaticPlan key={"static"} data={""} addbtn={""}  delbtn={clearfromPlan} />
                         </div>
                }
                {
                    recipes.length ? (
                        
                        <div className="col-6 text-center">
                            {recipes.map(recipe => <SavedRecipes key={recipe.label}data={recipe} ref={inputRef} saveToPlan={saveToPlan} deleteFromFavs={deleteFromFavs} />)}
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}



export default Plan;