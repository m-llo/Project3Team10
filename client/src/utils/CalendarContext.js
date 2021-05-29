import React from "react";

const CalendarContext = React.createContext({
  plan: [
    {
       day:"Sunday" ,
       recipe:{
         label: "Risotto",
         thumbnail:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/4/19/1/GH0510H_lemony-shrimp-and-risotto-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371615703640.jpeg" ,
         url:"https://www.foodnetwork.com/recipes/giada-de-laurentiis/lemony-shrimp-and-risotto-recipe-2018344",
         ingredients: ["rice", "cheese", "milk"], 
       } 
       
    },
    {
      day:"Monday" ,
      recipe:{
        label:"Ribeye",
        thumbnail: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/6/15/0/bq1a03_rib_eye_steak.jpg.rend.hgtvcom.826.620.suffix/1385518338061.jpeg",
        url: "https://www.foodnetwork.com/recipes/rib-eye-steak-recipe-1942582",
        ingredients:["steak", "french fries"]
      }
    },
    {
      day:"Tuesday" ,
      recipe:{
        label:"Tacos",
        thumbnail: "https://food.cld.sndimg.com/image/upload/w_2400/v1/fn_core_images/food/fullset/2016/3/31/3/FNM_050116-Spicy-Ground-Beef-Taco-Recipe_s4x3.jpg",
        url: "https://www.foodnetwork.com/kitchen/classes/spicy-ground-beef-tacos_439e9361-8051-44ac-8df1-eb9136b8d810",
        ingredients:["tortillas", "ground beef", "onions", "cilantro", "salsa"]
      }
    },
    {
      day:"Wednesday" ,
      recipe:{
        label:"Pot Pie",
        thumbnail:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/8/7/0/WU0507H_chicken-pot-pie-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1379102491839.jpeg",
        url: "https://www.foodnetwork.com/recipes/chicken-pot-pie-2145191",
        ingredients:["pie crust", "mixed vegatables", "chicken breast", "flour"]
      }
    },
    {
      day:"Thursday" ,
      recipe:{
        label:"Spaghetti",
        thumbnail: "https://food.cld.sndimg.com/image/upload/w_2400/v1/fn_core_images/food/plus/fullset/2020/04/15/0/FNKLive_Dana-Beninati-Spaghetti-and-Meatballs.jpg",
        url: "https://www.foodnetwork.com/kitchen/classes/spaghetti-and-meatballs_379bfaf9-0009-4c7e-a7c7-44076b95a24d",
        ingredients:["spaghetti noodles", "italian sausage", "spaghetti sauce"]
      }
    },
    {
      day:"Friday" ,
      recipe:{
        label:"Cheeseburgers",
        thumbnail: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/31/2/FNM_030113-Cheese-Stuffed-Cheeseburger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371613778527.jpeg",
        url: "https://www.foodnetwork.com/recipes/food-network-kitchen/cheesy-cheeseburgers-recipe-2111823",
        ingredients:["buns", "angus ground beef patties", "sliced cheese",]
      }
    },
    {
      day:"Saturday" ,
      recipe:{
        label:"Chef's Salad",
        thumbnail: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Chefs-Salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1383814438332.jpeg",
        url: "https://www.foodnetwork.com/recipes/food-network-kitchen/chefs-salad-recipe-2011625",
        ingredients:["hard boiled eggs", "chunk ham", "romaine lettuce", "shredded cheese", "grape tomatoes",]
      }
    }
   ]
});

export default CalendarContext;
