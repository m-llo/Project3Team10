import React, { Component, useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";
import API from "../../utils/API";
import { Link, useLocation } from "react-router-dom";
import Hero from "../../components/Hero/index"


function Home() {
    const location = useLocation();
    return (
        <div>
            <Hero />
            <div className="col-lg align-items-center">

                <Link to="/list" className={location.pathname === "/list"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">My Shopping List</button></Link>
                <Link to="/search" className={location.pathname === "/search"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Search for Recipe's</button></Link>
                <Link to="/plan" className={location.pathname === "/plan"}><button type="button" className="btn btn-warning btn-lg homebtn m-4">Manage Meal Plan</button></Link>
              
            </div>
            <div className="row">
            <Calendar />
            </div>
        </div>
    )
}

export default Home;
