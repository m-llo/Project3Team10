import axios from "axios";

export default{
    getCalendar: function(){
        
        return axios.get("/api/calendar/:id") 
        },







}
