import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Homepage/HomepageContainer"
import List from "./Pages/ShoppingList/List"
import Plan from "./Pages/buildPlan/BuildPlan"
// import './App.css';
// import { useAuth0 } from '@auth0/auth0-react';
// import NavBar  from "./components/Nav-bar/nav-bar";


function App() {
  // const { isLoading, isAuthenticated} = useAuth0();

  return (
  
    <Router>

   <div id="app" className="d-flex flex-column h-100">
      {/* <NavBar /> */}
      
          <Header />
            <Route exact path="/" component={Home} />

            <Route exact path="/search" component={Search} />
          
            <Route exact path="/list" component={List} />
            <Route exact path="/plan" component={Plan} />
  
      </div>
    </Router>
  )
};
export default App;
