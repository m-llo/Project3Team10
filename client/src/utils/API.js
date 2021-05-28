
import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {

    return axios.get("/api/recipes", { params: { q: query } });
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

