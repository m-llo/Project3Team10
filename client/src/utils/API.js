
import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.get("https://api.edamam.com/search", { params: { q: query, } });
  },
 getCalendar: function(){
        return axios.get("/api/calendar/:id") 
}

}

