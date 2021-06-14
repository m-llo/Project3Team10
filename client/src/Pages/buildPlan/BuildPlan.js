import React, { useEffect, useState} from "react";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero/index"
import PlanCards from "../../components/Plan/PlanCards"
import SavedRecipes from "../../components/Plan/SavedRecipes"
// import StaticPlan from "../../components/Plan/StaticPlan"

function Plan() {
    const location = useLocation();
    const userId = "60c42726807d563e28df18c7"
    let inputDay =""

    const [plan, setPlan] = useState({})
    const [recipes, setRecipes] = useState([]) 
    // const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        API.getCalendar(userId)
            .then((res) => { console.log("res", res); console.log("res.data", res.data[0]); setPlan(res.data[0])})
            .catch(err => console.log(err));
            
        // if (!calendar){
        //     console.log("building calendar")
        //     API.createCalendar(userId)
        //     .then((res) => { console.log("res", res); console.log("res.data", res.data[0]); setPlan(res.data[0]) })
        //     .catch(err => console.log(err))
        // }
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
        console.log("entered value", event.target.value)
        inputDay = event.target.value  
        console.log("input day",inputDay)      
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
        const planId = plan._id
        console.log("plan id ", planId)

        setPlan({
                    ...plan,   
                    [inputDay] : {
                        image,
                        url,
                        ingredients,
                        label,
                    } 
                })

        console.log("new plan ", plan)
        
        API.updateCalendar(
            planId,
            plan
        )
            //    then refresh page which calls the calendar again and updates the state
        .then(res => {
            console.log(label + " successfully added");
            alert(label + " successfully added")
            //    window.location.reload()
        })
        .catch(err => console.log(err))
    };

    return (
        <div>
            <div className="col- lg text-center">
                <Link to="/" href={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Home</button></Link>
                <Link to="/search" href={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4 ">Get Recipes</button></Link>
                <Link to="/list" href={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">My Shopping List</button></Link>
            </div>
            <Hero />
            <div className="row">
                <h5 className="col-6 text-center display-6 mb-2">My Plan</h5>
                <h5 className="col-6 text-center display-6 mb-2">My Recipes</h5>
            </div>
            <div className=" row wrapper">
               {
                plan.hasOwnProperty("sunday") ? (
                    <div className="col-6">
                        <PlanCards  day={plan.sunday.day} ingredients={plan.sunday.ingredients} label={plan.sunday.label} url={plan.sunday.url} image={plan.sunday.image} userId={plan.userId}  addbtn={addToList}  delbtn={clearfromPlan}   />
                        <PlanCards  day={plan.monday.day}ingredients={plan.monday.ingredients} label={plan.monday.label} url={plan.monday.url} image={plan.monday.image} userId={plan.userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards day={plan.tuesday.day} ingredients={plan.tuesday.ingredients} label={plan.tuesday.label} url={plan.tuesday.url} image={plan.tuesday.image} userId={plan.userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards day={plan.wednesday.day}ingredients={plan.wednesday.ingredients} label={plan.wednesday.label} url={plan.wednesday.url} image={plan.wednesday.image} userId={plan.userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards day={plan.thursday.day}ingredients={plan.thursday.ingredients} label={plan.thursday.label} url={plan.thursday.url} image={plan.thursday.image} userId={plan.userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards day={plan.friday.day} ingredients={plan.friday.ingredients} label={plan.friday.label} url={plan.friday.url} image={plan.friday.image} userId={plan.userId}  addbtn={addToList}  delbtn={clearfromPlan} />
                        <PlanCards day={plan.saturday.day} ingredients={plan.saturday.ingredients} label={plan.saturday.label} url={plan.saturday.url} image={plan.saturday.image} userId={plan.userId} id={plan.id} addbtn={addToList}  delbtn={clearfromPlan} />
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