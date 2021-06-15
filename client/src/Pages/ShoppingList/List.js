import React, {
  // useState, 
  useEffect} from "react";
import API from "../../utils/API";
import Hero from "../../components/Hero/index"
import { Link, useLocation } from "react-router-dom";
import IngredientList from "../../components/IngredientList";


function ShoppingList() {
  const location = useLocation();
  let userPlan = []
  let ingredients =[]
  // const [listItems, setListItems] = useState([])
  let listItems = []
  
    useEffect(() => {
      let userId = localStorage.getItem("logged user")
      console.log("userid from local ", userId)
      API.getCalendar(userId)
          .then((res) => { console.log("res", res); console.log("res.data", res.data[0]);
          localStorage.setItem("calendar ID", res.data[0]._id);
            sessionStorage.setItem("calendar ID", res.data[0]._id);
            userPlan.push(res.data[0].sunday);
            userPlan.push(res.data[0].monday)
            userPlan.push(res.data[0].tuesday);
            userPlan.push(res.data[0].wednesday);
            userPlan.push(res.data[0].thursday);
            userPlan.push(res.data[0].friday);
            userPlan.push(res.data[0].saturday)
             console.log("userPlan ", userPlan)
             userPlan.map((day)=>ingredients.push(day.ingredients))
          console.log("ingredients ", ingredients)
          console.log("called isolate function")
            ingredients.map((recipe)=>{recipe.map((ingredient)=>{console.log("iso ing ", ingredient); listItems.push(ingredient)})})
            console.log("listItems ", listItems)
        })
          .catch(err => console.log(err));

  }, [])

   
  return (
    <div>
      <div className="col-lg text-center">
        <Link to="/search" href={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Get Recipes</button></Link>
        <Link to="/" href={location.pathname === "/"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Home</button></Link>
        <Link to="/plan" href={location.pathname === "/plan"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Manage Meal Plan</button></Link>
      </div>
      <Hero />
         <div className="container">
             <div className="col-12">
                <div className="text-center display-4">Ingredients:</div> 
            
                  {
                    listItems.length ? (
                         <ul>
                           {listItems.map((item)=><IngredientList ingredients={item}/>)}
                        </ul>                         
                       ): null
                         
                  }
            
                </div>
           </div>       
    </div>
  )
  }
export default ShoppingList;