
import axios from "axios";
const BASEURL = "https://api.edamam.com/search?q="
const APIKEY = "&app_id=40e21d0a&app_key=d32282d44a926244791002337e579dc9&count=10"

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  searchRecipes: function(q){
    return axios.get(BASEURL + q + APIKEY)
  },
  saveRecipes: function (recipeData){
    return axios.post("/api/recipes/new", recipeData);
  },
getRecipesByUser: function(id) {
    return axios.get("/api/recipes/" + id)
  },
  getRecipesByQuery: function(q) {

    return axios.get("/api/recipes/" + q);
  },
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
 getCalendar: function(id){
        return axios.get("/api/calendar/" + id) 
},
 deleteCalendar: function(id) {
    return axios.delete("/api/calendar/" + id);
  },
clearFromCalendar: function(id, day) {
    return axios.post("/api/calendar/" + id, {
      day: day,
      recipeId:""});
  },
  updateCalendar: function(id, recipeId, day){
      return axios.post("/api/calendar" + id, {
        recipeId: recipeId, 
        day: day})
  },

  createCalendar: function(userId){
    return axios.post("/api/calendar",{
      userId: userId
    })
},

  addingredients: function (id, ingredients){
    return axios.post("api/list" + id)

  }

}
