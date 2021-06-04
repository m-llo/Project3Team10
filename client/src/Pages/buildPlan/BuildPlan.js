import React, { useEffect, useState, useRef } from "react";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero/index"
import PlanCards from "../../components/Plan/PlanCards"
import SavedRecipes from "../../components/Plan/SavedRecipes"



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
            API.createCalendar(userId)
            .then((res) => { setPlan(res); console.log("plan", plan) })
            .catch(err => console.log(err))
        }
        // API.getRecipesByUser(id)
        // .then((res) => { setRecipes(res); console.log("recipes", recipes) })
        // .catch(err => console.log(err));
        API.getRecipes()
        .then((res) => { setRecipes(res); console.log("recipes", recipes) })
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
            <div className="wrapper">
                <div className="col-6">
                    {plan.map(day => <PlanCards data={day} addbtn={""} ref={inputRef} delbtn={clearfromPlan} />)}
                </div>
                <div className="col-6">
                    {recipes.map(recipe => <SavedRecipes data={recipe} ref={inputRef} saveToPlan={saveToPlan} />)}
                </div>
            </div>
        </div>
    )
}



export default Plan;