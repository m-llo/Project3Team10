import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Homepage/HomepageContainer";
import List from "./Pages/ShoppingList/List";
import Plan from "./Pages/buildPlan/BuildPlan";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Signup/Signup";
import About from "./Pages/About/about";

function App() {
  return (
  
  <Router>
        
    <div id="app" className="d-flex flex-column h-100">
     
      <Header />
      <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/list" component={List} />
        <Route exact path="/plan" component={Plan} />
    </div>
  </Router>
  )
};
export default App;
