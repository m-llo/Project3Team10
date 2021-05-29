import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Homepage/HomepageContainer"
import Signup from "./signup"
import List from "./Pages/ShoppingList/List"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/app/signup" component={Signup} />
        <Route exact path="/list" component={List} />
      </div>
    </Router>

    );
  }
export default App;
