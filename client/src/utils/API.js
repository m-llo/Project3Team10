
import axios from "axios";
const BASEURL = "https://api.edamam.com/search?q="
const APIKEY = "&app_id=40e21d0a&app_key=d32282d44a926244791002337e579dc9&count=10"

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  searchRecipes: function(q){
    return axios.get(BASEURL + q + APIKEY)
  },
getRecipesByUser: function(id) {
    return axios.get("/api/recipes/" + id)
  },
  getRecipesByQuery: function(q) {

    return axios.get("/api/recipes/" + q);
  },
 getCalendar: function(id){
        return axios.get("/api/calendar/" + id) 
},
 deleteCalendar: function(id) {
    return axios.delete("/api/calendar/" + id);
  },
  updateCalendar: function(id){
      return axios.post("/api/calendar" + id)
  }

}
