import React, { useEffect, useState, useRef } from "react";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero/index"
import PlanCards from "../../components/Plan/PlanCards"
import SavedRecipes from "../../components/Plan/SavedRecipes"
// import StaticPlan from "../../components/Plan/StaticPlan"

function Plan() {
    const location = useLocation();
    const inputRef = useRef()
    const userId = "60bee00177427c19cc9e1e2f"


    const [plan, setPlan] = useState({})
    const [recipes, setRecipes] = useState([]) 
    // const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
       const calendar = API.getCalendar(userId)
            .then((res) => { console.log("res", res); console.log("res.data", res.data); 
            setPlan(res.data)
         })
            .catch(err => console.log(err));

        if (!calendar){
            console.log("building calendar")
            API.createCalendar(userId)
            .then((res) => { console.log("res", res); console.log("res.data", res.data); setPlan(res.data) })
            .catch(err => console.log(err))
        }
        // API.getRecipesByUser(userId)
        // .then((res) => { setRecipes(res); console.log("recipes", recipes) })
        // .catch(err => console.log(err));
        API.getRecipes()
        .then((res) => {console.log("res", res); console.log("res.data", res.data); setRecipes(res.data) })
        .catch(err => console.log(err));

    }, [])
    
 function addToList (event) {
    const ingredients = event.target.getAttribute("ingredients")
    console.log("ingredients", ingredients)


 }
    
    
    console.log("plan state", plan);

    if(plan.length > 0){
        console.log("friday" , plan[0].friday.day)
    }
    

    function clearfromPlan (event){
        const calendarId = plan.id
        const deleteDay = event.target.getAttribute("day")
        const planId = calendarId
        const label = event.target.getAttribute("label")
        API.clearFromCalendar({
            id: planId,
            day: deleteDay
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
    const handleInput = event =>{
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
        switch(inputDay) {
            case "sunday":
                return setPlan({
                        sunday:recipeId
                    })
                ;
                case "monday":
                return setPlan({
                        monday:recipeId
                    })
                ;
                case "tuesday":
                return setPlan({
                        tuesday:recipeId
                    })
                ;
                case "wednesday":
                return setPlan({
                        wednesday:recipeId
                    })
                ;
                case "thursday":
                return setPlan({
                        thursday:recipeId
                    })
                ;
                case "friday":
                return  setPlan({
                        friday:recipeId
                    })
                ;
                case "saturday":
                return setPlan({
                        saturday:recipeId
                    })
                ;
                default: return plan;
        }
    }
    const viewIngredients = event => {
        console.log(event.target.id)
    }
    const saveToPlan = event => {
        const image = event.target.getAttribute("image")
        console.log(image)
        const label = event.target.getAttribute("label")
        console.log(label)
        const ingredients = event.target.getAttribute("ingredients")
        console.log(ingredients)
        const url = event.target.getAttribute("url")
        console.log(url)
        const planId = plan.id
        
        API.updateCalendar({
            id: planId,
            // calendar
            plan
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
                <Link to="/" className={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Home</button></Link>
                <Link to="/search" className={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4 ">Get Recipes</button></Link>
                <Link to="/list" className={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">My Shopping List</button></Link>
            </div>
            <Hero />
            <div className="row">
                <h5 className="col-6 text-center display-6 mb-2">My Plan</h5>
                <h5 className="col-6 text-center display-6 mb-2">My Recipes</h5>
            </div>
            <div className=" row wrapper">
               {
                plan.length > 0 ? (
                    <div className="col-6">
                        <PlanCards key={plan[0].sunday.day} day={plan[0].sunday.day} ingredients={plan[0].sunday.ingredients} label={plan[0].sunday.label} url={plan[0].sunday.url} image={plan[0].sunday.image} userId={plan[0].userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards key={plan[0].monday.day} day={plan[0].monday.day}ingredients={plan[0].monday.ingredients} label={plan[0].monday.label} url={plan[0].monday.url} image={plan[0].monday.image} userId={plan[0].userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards key={plan[0].tuesday.day}day={plan[0].tuesday.day} ingredients={plan[0].tuesday.ingredients} label={plan[0].tuesday.label} url={plan[0].tuesday.url} image={plan[0].tuesday.image} userId={plan[0].userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards key={plan[0].wednesday.day}day={plan[0].wednesday.day}ingredients={plan[0].wednesday.ingredients} label={plan[0].wednesday.label} url={plan[0].wednesday.url} image={plan[0].wednesday.image} userId={plan[0].userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards key={plan[0].thursday.day} day={plan[0].thursday.day}ingredients={plan[0].thursday.ingredients} label={plan[0].thursday.label} url={plan[0].thursday.url} image={plan[0].thursday.image} userId={plan[0].userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards key={plan[0].friday.day}day={plan[0].friday.day} ingredients={plan[0].friday.ingredients} label={plan[0].friday.label} url={plan[0].friday.url} image={plan[0].friday.image} userId={plan[0].userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards key={plan[0].saturday.day}day={plan[0].saturday.day} ingredients={plan[0].saturday.ingredients} label={plan[0].saturday.label} url={plan[0].saturday.url} image={plan[0].saturday.image} userId={plan[0].userId} id={plan.id} addbtn={addToList}  delbtn={clearfromPlan} />
                    </div>
                ) : null
                }
                {
                recipes.length ? (
                    <div className="col-6 text-center">
                        {recipes.map((recipe) => <SavedRecipes key={recipe.label} id={recipe.id} label={recipe.label} image={recipe.image} ingredients={recipe.ingredients} saveToPlan={saveToPlan} viewIngredients={viewIngredients} handleInput={handleInput} deleteFromFavs={deleteFromFavs} />)}
                    </div>
                ) : null
                }
            </div>
        </div>
    )
}



export default Plan;