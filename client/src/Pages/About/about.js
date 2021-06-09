import React from "react";
import "./style.css";
import Hero from "../../components/Hero/index"
function About() {
    return (
      <div>
      <div className="row"></div>
        <Hero />
        <h2 className="col-12 text-center">This website was created to be able to cut down at least one stressful variable in your everyday Life.
        Like lots of people on Sunday, you realize that you have a very hectic week ahead. 
        How can you find time to create a meal plan and shop for ingredients for everyday of the week? 
        We created Let's CUK! to help consumers create a realistic meal plan for Monday through Sunday. </h2>
        <h3 className="col-12 text-center"><em>Please click on the log in button and create a profile with just your email and a password of your choice.
            Once you are logged in, you will be to create your idea meal plan and be able to create an ingredients
            list to use at the store. 
            ENJOY!! 
        </em></h3>
      </div>
  
    );
  }
  
  export default About;