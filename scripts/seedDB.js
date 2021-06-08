const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CUKdb"
);

const recipeSeed = [
  {
    image: "",
    url: "http://www.recipezaar.com/Baked-Turkey-Sausage-Penne-327796",
    ingredients: [
      "mozzarella cheese",
      "red pepper flakes",
      "tomato",
      "basil",
      "oregano",
      "thyme",
      "penne",
      "garlic",
      "green pepper",
      "black pepper",
      "kosher salt",
      "olive oil",
      "pasta sauce",
      "red onions",
      "red pepper",
      "turkey sausage"
    ],
    label: "Baked Turkey Sausage Penne "
  },
  {
    image: "",
    url:
      "http://allrecipes.com/Recipe/Homemade-Italian-Turkey-Sausage/Detail.aspx",
    ingredients: [
      "oregano",
      "fennel seed",
      "garlic powder",
      "turkey",
      "black pepper",
      "salt",
      "sugar"
    ],
    label: "Homemade Italian Turkey Sausage "
  },
  {
    image: "http://img.recipepuppy.com/3130.jpg",
    url: "http://allrecipes.com/Recipe/Turkey-Sausage-Breakfast/Detail.aspx",
    ingredients: [
      "cheddar cheese",
      "eggs",
      "green onion",
      "milk",
      "turkey sausage"
    ],
    label: "Turkey Sausage Breakfast "
  },
  {
    image: "",
    url: "http://allrecipes.com/Recipe/Tuscan-Turkey-Sausage-Soup/Detail.aspx",
    ingredients: [
      "caraway seed",
      "fennel seed",
      "italian seasoning",
      "turkey sausage",
      "leek",
      "onions",
      "chicken broth",
      "seasoning"
    ],
    label: "Tuscan Turkey Sausage Soup "
  },
  {
    image: "",
    url: "http://allrecipes.com/Recipe/Turkey-Sausage-Pie/Detail.aspx",
    ingredients: ["green pepper", "olive oil", "onions", "turkey sausage"],
    label: "Turkey Sausage Pie "
  },
  {
    image: "http://img.recipepuppy.com/234741.jpg",
    url:
      "http://www.grouprecipes.com/74096/turkey-sausage-stuffed-zucchini.html",
    ingredients: [
      "bread crumbs",
      "chicken broth",
      "garlic",
      "turkey",
      "onions",
      "tomato",
      "parmesan cheese",
      "fennel seed",
      "basil",
      "olive oil",
      "red pepper flakes",
      "salt",
      "poultry seasoning",
      "thyme",
      "sage",
      "oregano",
      "black pepper",
      "garlic powder",
      "zucchini"
    ],
    label: "Turkey Sausage Stuffed Zucchini Recipe "
  },
  {
    image: "",
    url:
      "http://allrecipes.com/Recipe/Potato-and-Turkey-Sausage-Soup/Detail.aspx",
    ingredients: [
      "celery",
      "half and half",
      "margarine",
      "onions",
      "potato",
      "salt",
      "water"
    ],
    label: "Potato and Turkey Sausage Soup "
  },
  {
    image: "http://img.recipepuppy.com/8496.jpg",
    url:
      "http://allrecipes.com/Recipe/Moms-Turkey-Sausage-Patties/Detail.aspx",
    ingredients: [
      "black pepper",
      "cayenne",
      "sage",
      "ginger",
      "salt",
      "turkey"
    ],
    label: "Mom's Turkey Sausage Patties "
  },
  {
    image: "http://img.recipepuppy.com/128166.jpg",
    url:
      "http://www.epicurious.com/recipes/food/views/Turkey-Sausage-Patties-350914",
    ingredients: [
      "cayenne",
      "cinnamon",
      "cloves",
      "bread crumbs",
      "turkey",
      "egg yolks",
      "milk",
      "nutmeg",
      "onions",
      "olive oil"
    ],
    label: "Turkey Sausage Patties "
  },
  {
    image: "",
    url: "http://www.grouprecipes.com/24920/bears-turkey-sausage.html",
    ingredients: [
      "fish sauce",
      "cornstarch",
      "eggs",
      "green beans",
      "green onion",
      "olive oil",
      "serrano pepper",
      "sugar",
      "turkey"
    ],
    label: "Bears Turkey Sausage Recipe "
  },
  {
    image: "http://img.recipepuppy.com/685.jpg",
    url: "http://allrecipes.com/Recipe/Country-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "baking powder",
      "eggs",
      "flour",
      "onions",
      "potato",
      "salt",
      "vegetable oil"
    ],
    label: "Country Potato Pancakes "
  },
  {
    image: "http://img.recipepuppy.com/379906.jpg",
    url: "http://www.grouprecipes.com/20346/blender-potato-pancakes.html",
    ingredients: ["eggs", "flour", "onions", "potato", "baking powder", "salt"],
    label: "Blender Potato Pancakes Recipe "
  },
  {
    image: "",
    url: "http://allrecipes.com/Recipe/Sweet-Potato-Pancakes-2/Detail.aspx",
    ingredients: [
      "cinnamon",
      "molasses",
      "egg whites",
      "eggs",
      "olive oil",
      "yogurt",
      "rolled oat",
      "vanilla extract"
    ],
    label: "Sweet Potato Pancakes "
  },
  {
    image: "http://img.recipepuppy.com/37717.jpg",
    url:
      "http://www.recipezaar.com/Rievkooche-or-Reibekuchen-Cologne-Style-Potato-Pancakes-173315",
    ingredients: [
      "applesauce",
      "eggs",
      "lemon juice",
      "milk",
      "potato",
      "salt",
      "vegetable oil",
      "water"
    ],
    label: "Rievkooche or Reibekuchen (Cologne Style Potato Pancakes) "
  },
  {
    image: "http://img.recipepuppy.com/44062.jpg",
    url: "http://www.recipezaar.com/Potato-Pancakes-With-Smoked-Salmon-211538",
    ingredients: [
      "baking powder",
      "brown sugar",
      "butter",
      "eggs",
      "fennel seed",
      "flour",
      "dill weed",
      "black pepper",
      "vegetable oil",
      "salt",
      "salmon",
      "sour cream",
      "onions",
      "white potato"
    ],
    label: "Potato Pancakes With Smoked Salmon "
  },  
];
db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



