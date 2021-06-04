import React, { Component, useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero/index"


function Home() {
    const location = useLocation();
    return (
        <div>
            <div className= "col- lg text-center">
          <Link to="/plan" className={location.pathname === "/plan"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Manage My Plan</button></Link>
          <Link to="/search" className={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4 ">Get Recipes</button></Link>
          <Link to="/list" className={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">View My Shopping List</button></Link>
           
       </div>
            <Hero />

            <div className="row">
            <Calendar />
            </div>
        </div>
    )
}

export default Home;
