
import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRecipes: function(query) {

    return axios.get("/api/search", { params: { q: query } });
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
