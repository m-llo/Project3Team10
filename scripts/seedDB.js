const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CUKdb"
);

const recipeSeed = [
  {
    thumbnail: "",
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
    thumbnail: "",
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
    thumbnail: "http://img.recipepuppy.com/3130.jpg",
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
    thumbnail: "",
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
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Turkey-Sausage-Pie/Detail.aspx",
    ingredients: ["green pepper", "olive oil", "onions", "turkey sausage"],
    label: "Turkey Sausage Pie "
  },
  {
    thumbnail: "http://img.recipepuppy.com/234741.jpg",
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
    thumbnail: "",
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
    thumbnail: "http://img.recipepuppy.com/8496.jpg",
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
    thumbnail: "http://img.recipepuppy.com/128166.jpg",
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
    thumbnail: "",
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
    thumbnail: "http://img.recipepuppy.com/685.jpg",
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
    thumbnail: "http://img.recipepuppy.com/379906.jpg",
    url: "http://www.grouprecipes.com/20346/blender-potato-pancakes.html",
    ingredients: ["eggs", "flour", "onions", "potato", "baking powder", "salt"],
    label: "Blender Potato Pancakes Recipe "
  },
  {
    thumbnail: "",
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
    thumbnail: "http://img.recipepuppy.com/37717.jpg",
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
    thumbnail: "http://img.recipepuppy.com/44062.jpg",
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
  {
    thumbnail: "",
    url:
      "http://www.epicurious.com/recipes/food/views/Bird-Flanagan-Potato-Pancakes-104867",
    ingredients: [
      "cheddar cheese",
      "eggs",
      "canadian bacon",
      "onions",
      "parsley",
      "black pepper",
      "potato",
      "salt",
      "vegetable oil"
    ],
    label: "Bird Flanagan Potato Pancakes "
  },
  {
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Sweet-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "baking powder",
      "brown sugar",
      "cumin",
      "curry powder",
      "eggs",
      "flour",
      "milk",
      "sweet potato",
      "vegetable oil",
      "sugar"
    ],
    label: "Sweet Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/212.jpg",
    url:
      "http://allrecipes.com/Recipe/Old-Fashioned-Potato-Pancakes/Detail.aspx",
    ingredients: ["eggs", "flour", "onions", "potato", "black pepper", "salt"],
    label: "Old-Fashioned Potato Pancakes "
  },
  {
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Confetti-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "vegetable oil",
      "carrot",
      "basil",
      "eggs",
      "flour",
      "garlic",
      "onions",
      "potato",
      "salt",
      "sugar",
      "zucchini"
    ],
    label: "Confetti Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/688.jpg",
    url: "http://allrecipes.com/Recipe/Authentic-Potato-Pancakes/Detail.aspx",
    ingredients: [
      "bread crumbs",
      "carrot",
      "parsley",
      "flour",
      "garlic",
      "lemon juice",
      "olive oil",
      "onions",
      "potato",
      "salt"
    ],
    label: "Authentic Potato Pancakes "
  },
  {
    thumbnail: "http://img.recipepuppy.com/29216.jpg",
    url:
      "http://allrecipes.com/Recipe/Taqueria-Style-Tacos---Carne-Asada/Detail.aspx",
    ingredients: [
      "black pepper",
      "chili powder",
      "cotija cheese",
      "cumin",
      "chilies",
      "oregano",
      "sirloin steak",
      "garlic",
      "garlic powder",
      "jalapeno",
      "lime",
      "olive oil",
      "paprika",
      "salt",
      "soy sauce",
      "tomato",
      "onions",
      "white pepper",
      "white vinegar"
    ],
    label: "Taqueria Style Tacos - Carne Asada "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Amazing-Salmon-Tacos-133959",
    ingredients: [
      "chili powder",
      "cumin",
      "tomato",
      "cilantro",
      "green onion",
      "lime",
      "olive oil",
      "salmon",
      "yellow onions"
    ],
    label: "Amazing Salmon Tacos "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Chicken-Tacos-the-Tahiti-Way-94613",
    ingredients: [
      "black pepper",
      "chicken",
      "cilantro",
      "corn tortillas",
      "garlic",
      "onions",
      "pepperoncini pepper"
    ],
    label: "Chicken Tacos - the Tahiti Way "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Chili-Tacos-47685",
    ingredients: [
      "cheese",
      "corn tortillas",
      "hamburger",
      "lettuce",
      "onions",
      "picante sauce",
      "sour cream",
      "tomato",
      "vegetable oil",
      "chili"
    ],
    label: "Chili Tacos "
  },
  {
    thumbnail: "http://img.recipepuppy.com/351288.jpg",
    url: "http://www.grouprecipes.com/81244/the-taco-rack-seafood-tacos.html",
    ingredients: [
      "imitation crabmeat",
      "taco shells",
      "lemon",
      "cocktail sauce",
      "cheddar cheese",
      "shrimp",
      "sea scallops",
      "seafood",
      "butter"
    ],
    label: "The Taco Rack Seafood Tacos Recipe "
  },
  {
    thumbnail: "",
    url:
      "http://allrecipes.com/Recipe/Slow-Cooker-Shredded-Venison-for-Tacos/Detail.aspx",
    ingredients: ["cayenne", "flour", "vegetable oil", "venison", "water"],
    label: "Slow Cooker Shredded Venison for Tacos "
  },
  {
    thumbnail: "",
    url:
      "http://allrecipes.com/Recipe/Chipotle-Tilapia-Tacos-with-Mango-Cilantro-Salsa/Detail.aspx",
    ingredients: [
      "vegetable oil",
      "chipotle peppers",
      "cilantro",
      "spanish rice",
      "cracked black pepper",
      "garlic",
      "garlic powder",
      "jalapeno",
      "lime juice",
      "mango",
      "mayonnaise",
      "red onions",
      "salt",
      "tilapia fillets"
    ],
    label: "Chipotle Tilapia Tacos with Mango-Cilantro Salsa "
  },
  {
    thumbnail: "http://img.recipepuppy.com/30458.jpg",
    url: "http://allrecipes.com/Recipe/Oaxacan-Tacos/Detail.aspx",
    ingredients: [
      "cilantro",
      "jalapeno",
      "lime",
      "onions",
      "salt",
      "sirloin steak",
      "vegetable oil"
    ],
    label: "Oaxacan Tacos "
  },
  {
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Pie-Iron-Tacos/Detail.aspx",
    ingredients: [
      "ground beef",
      "lettuce",
      "monterey jack cheese",
      "onions",
      "tomato"
    ],
    label: "Pie Iron Tacos "
  },
  {
    thumbnail: "http://img.recipepuppy.com/40579.jpg",
    url: "http://www.recipezaar.com/Spicy-Beef-Tacos-139608",
    ingredients: [
      "beef",
      "beef broth",
      "cheddar cheese",
      "chili powder",
      "black pepper",
      "garlic",
      "cumin",
      "lettuce",
      "onions",
      "paprika",
      "flour",
      "salt",
      "sour cream",
      "stuffed green olive",
      "taco shells",
      "tomato"
    ],
    label: "Spicy Beef Tacos "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Cajun-Hamburger-Steak-122095",
    ingredients: [
      "bacon",
      "green pepper",
      "black pepper",
      "cayenne",
      "cajun seasoning",
      "steak sauce",
      "eggs",
      "garlic",
      "green onion",
      "ground beef",
      "liquid smoke flavoring",
      "onions",
      "salt",
      "sausage",
      "soy sauce",
      "water",
      "worcestershire sauce"
    ],
    label: "Cajun Hamburger Steak "
  },
  {
    thumbnail: "http://img.recipepuppy.com/42381.jpg",
    url:
      "http://www.recipezaar.com/Hamburger-or-Sandwich-Buns-or-Hot-Dog-Buns-94993",
    ingredients: [
      "eggs",
      "flour",
      "vegetable oil",
      "salt",
      "sugar",
      "water",
      "yeast"
    ],
    label: "Hamburger or Sandwich Buns or Hot Dog Buns "
  },
  {
    thumbnail: "http://img.recipepuppy.com/134632.jpg",
    url:
      "http://www.grouprecipes.com/73371/arabic-bread-loaf-or-hamburger-buns.html",
    ingredients: [
      "brown sugar",
      "eggs",
      "flour",
      "yeast",
      "salt",
      "vegetable oil"
    ],
    label: "Arabic Bread Loaf Or Hamburger Buns Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/219478.jpg",
    url: "http://www.recipezaar.com/Hamburger-and-Kidney-Beans-103316",
    ingredients: [
      "red kidney beans",
      "garlic salt",
      "ground beef",
      "black pepper",
      "salt"
    ],
    label: "Hamburger and Kidney Beans "
  },
  {
    thumbnail: "http://img.recipepuppy.com/349253.jpg",
    url: "http://www.grouprecipes.com/44639/hamburger-soup-corchef-style.html",
    ingredients: [
      "bay leaf",
      "ketchup",
      "barley",
      "water",
      "carrot",
      "celery",
      "hamburger",
      "onions",
      "beef bouillon granules",
      "basil",
      "salt"
    ],
    label: "Hamburger Soup Corchef Style Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/360322.jpg",
    url: "http://www.recipezaar.com/Deviled-Beef-Hamburger-Patties-277747",
    ingredients: [
      "chili sauce",
      "eggs",
      "ground beef",
      "onions",
      "black pepper",
      "horseradish",
      "mustard",
      "salt",
      "worcestershire sauce"
    ],
    label: "Deviled Beef Hamburger Patties "
  },
  {
    thumbnail: "http://img.recipepuppy.com/510287.jpg",
    url: "http://www.recipezaar.com/Easy-and-Tasty-Hamburger-Gravy-253447",
    ingredients: [
      "cream of mushroom soup",
      "garlic",
      "ground beef",
      "onions",
      "sour cream"
    ],
    label: "Easy  and Tasty  Hamburger Gravy "
  },
  {
    thumbnail: "http://img.recipepuppy.com/611705.jpg",
    url: "http://www.recipezaar.com/Nanas-Favorite-Hamburger-Gravy-139492",
    ingredients: [
      "flour",
      "black pepper",
      "green pepper",
      "ground beef",
      "milk",
      "onions",
      "salt",
      "water"
    ],
    label: "Nana's Favorite Hamburger Gravy "
  },
  {
    thumbnail: "http://img.recipepuppy.com/3694.jpg",
    url: "http://allrecipes.com/Recipe/Hamburger-Soup-V/Detail.aspx",
    ingredients: [
      "barley",
      "ground beef",
      "carrot",
      "celery",
      "parsley",
      "cabbage",
      "potato",
      "salt",
      "water"
    ],
    label: "Hamburger Soup V "
  },
  {
    thumbnail: "http://img.recipepuppy.com/9720.jpg",
    url: "http://allrecipes.com/Recipe/Hamburger-Casserole/Detail.aspx",
    ingredients: ["ground beef", "celery", "egg noodles", "onions", "salsa"],
    label: "Hamburger Casserole "
  },
  {
    thumbnail: "http://img.recipepuppy.com/14502.jpg",
    url:
      "http://allrecipes.com/Recipe/Homemade-Crispy-Seasoned-French-Fries/Detail.aspx",
    ingredients: [
      "flour",
      "garlic salt",
      "onion powder",
      "paprika",
      "potato",
      "salt",
      "vegetable oil",
      "water"
    ],
    label: "Homemade Crispy Seasoned French Fries "
  },
  {
    thumbnail: "",
    url:
      "http://www.recipezaar.com/Cauliflower-That-Tastes-Like-French-Fries-116591",
    ingredients: ["cauliflower", "black pepper", "olive oil", "sea salt"],
    label: "Cauliflower That Tastes Like French Fries "
  },
  {
    thumbnail: "",
    url: "http://www.grouprecipes.com/70293/masala-french-fries.html",
    ingredients: [
      "black pepper",
      "citric acid",
      "corn starch",
      "mint",
      "oil to fry",
      "red pepper flakes",
      "potato",
      "salt"
    ],
    label: "Masala French Fries Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/281932.jpg",
    url: "http://www.grouprecipes.com/68899/french-fries.html",
    ingredients: ["vegetable oil", "potato", "kosher salt", "black pepper"],
    label: "French Fries Recipe "
  },
  {
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Yuca-French-Fries/Detail.aspx",
    ingredients: ["salt", "vegetable oil", "yuca"],
    label: "Yuca French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/29428.jpg",
    url: "http://allrecipes.com/Recipe/Cilantro-French-Fries/Detail.aspx",
    ingredients: ["vegetable oil", "potato", "salt"],
    label: "Cilantro French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/44079.jpg",
    url: "http://www.recipezaar.com/Frozen-French-Fries-52058",
    ingredients: ["cajun seasoning", "olive oil", "potato"],
    label: "Frozen French Fries "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Buffalo-Fries-333244",
    ingredients: ["french fries", "garlic", "hot sauce", "margarine", "salt"],
    label: "Buffalo French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/29430.jpg",
    url:
      "http://allrecipes.com/Recipe/Tail-Burner-Firehouse-French-Fries/Detail.aspx",
    ingredients: [
      "black pepper",
      "butter",
      "chili powder",
      "red pepper",
      "garlic powder",
      "lemon pepper"
    ],
    label: "Tail Burner Firehouse French Fries "
  },
  {
    thumbnail: "http://img.recipepuppy.com/40614.jpg",
    url: "http://www.recipezaar.com/Oven-French-Fries-29704",
    ingredients: ["olive oil", "nonstick cooking spray", "salt", "potato"],
    label: "Oven French Fries "
  },
  {
    thumbnail: "",
    url: "http://www.grouprecipes.com/66391/fruity-quinoa-salad.html",
    ingredients: [
      "mint",
      "quinoa",
      "apple",
      "lemon juice",
      "cider vinegar",
      "olive oil",
      "almonds",
      "salt",
      "black pepper"
    ],
    label: "Fruity Quinoa Salad Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/344415.jpg",
    url:
      "http://www.recipezaar.com/Curried-Quinoa-Salad-With-Cranberries-122057",
    ingredients: [
      "celery",
      "cider vinegar",
      "red pepper flakes",
      "curry powder",
      "cranberries",
      "green pepper",
      "honey",
      "quinoa",
      "red pepper",
      "soy sauce",
      "water"
    ],
    label: "Curried Quinoa Salad With Cranberries "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Basic-Quinoa-235534",
    ingredients: ["quinoa", "water"],
    label: "Basic Quinoa "
  },
  {
    thumbnail: "",
    url:
      "http://allrecipes.com/Recipe/Quinoa-Salad-with-Dried-Fruit-and-Nuts/Detail.aspx",
    ingredients: [
      "cayenne",
      "celery",
      "white vinegar",
      "green onion",
      "lemon juice",
      "pecan",
      "quinoa",
      "raisins",
      "salt",
      "vegetable oil",
      "water"
    ],
    label: "Quinoa Salad with Dried Fruit and Nuts "
  },
  {
    thumbnail: "http://img.recipepuppy.com/7231.jpg",
    url: "http://allrecipes.com/Recipe/Quinoa-with-Mushrooms/Detail.aspx",
    ingredients: [
      "butter",
      "chicken broth",
      "garlic",
      "olive oil",
      "onions",
      "parmesan cheese",
      "quinoa"
    ],
    label: "Quinoa with Mushrooms "
  },
  {
    thumbnail: "http://img.recipepuppy.com/16323.jpg",
    url: "http://allrecipes.com/Recipe/Tomato-Mint-Quinoa-Salad/Detail.aspx",
    ingredients: [
      "almonds",
      "cucumber",
      "cumin",
      "lime juice",
      "onions",
      "quinoa",
      "radish",
      "raisins",
      "salt",
      "vegetable oil",
      "tomato",
      "water"
    ],
    label: "Tomato-Mint Quinoa Salad "
  },
  {
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Veggie-Quinoa/Detail.aspx",
    ingredients: [
      "broccoli",
      "tofu",
      "garlic",
      "mushroom",
      "olive oil",
      "quinoa",
      "vegetable broth"
    ],
    label: "Veggie Quinoa "
  },
  {
    thumbnail: "http://img.recipepuppy.com/33726.jpg",
    url: "http://www.recipezaar.com/Quinoa-Salad-331992",
    ingredients: [
      "black beans",
      "cherry tomato",
      "cumin",
      "olive oil",
      "cilantro",
      "green onion",
      "lime",
      "quinoa",
      "red pepper flakes",
      "salt",
      "water"
    ],
    label: "Quinoa Salad "
  },
  {
    thumbnail: "http://img.recipepuppy.com/39174.jpg",
    url:
      "http://www.recipezaar.com/Five-Or-More-Ingredient-Garlic-Quinoa-121064",
    ingredients: ["carrot", "garlic", "quinoa", "sea salt", "onions", "water"],
    label: "Five (Or More!) Ingredient Garlic Quinoa "
  },
  {
    thumbnail: "http://img.recipepuppy.com/43199.jpg",
    url: "http://www.recipezaar.com/Quinoa-Pilaf-103775",
    ingredients: [
      "peas",
      "water",
      "garlic",
      "mushroom",
      "olive oil",
      "onions",
      "quinoa",
      "salt"
    ],
    label: "Quinoa Pilaf "
  },
  {
    thumbnail: "http://img.recipepuppy.com/267093.jpg",
    url: "http://www.grouprecipes.com/11241/home-fried-chicken.html",
    ingredients: ["milk", "bacon grease", "flour", "potato", "chicken"],
    label: "Home Fried Chicken Recipe "
  },
  {
    thumbnail: "",
    url:
      "http://www.recipezaar.com/Chicken-in-a-Pot-Plus-Stock-or-Dumplings-115070",
    ingredients: [
      "allspice",
      "bay leaf",
      "carrot",
      "celery",
      "thyme",
      "onions",
      "parsley",
      "black pepper",
      "salt",
      "water",
      "chicken"
    ],
    label: "Chicken in a Pot Plus Stock or Dumplings "
  },
  {
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Tipsy-Chicken/Detail.aspx",
    ingredients: [
      "beer",
      "cayenne",
      "chili powder",
      "cumin",
      "curry powder",
      "garlic powder",
      "wood chips",
      "onion powder",
      "paprika",
      "black pepper",
      "salt",
      "water"
    ],
    label: "Tipsy Chicken "
  },
  {
    thumbnail: "http://img.recipepuppy.com/45904.jpg",
    url:
      "http://www.recipezaar.com/2-in-1-Herbed-Chicken-Leftover-Chicken-Salad-108955",
    ingredients: [
      "chicken",
      "garlic",
      "margarine",
      "marjoram",
      "onions",
      "black pepper",
      "rosemary",
      "sage",
      "salt",
      "thyme"
    ],
    label: "2 in 1 - Herbed Chicken & Leftover Chicken Salad "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Beer-Can-Chicken-312508",
    ingredients: ["beer", "brown sugar", "salt", "seasoning", "chicken"],
    label: "Beer Can Chicken "
  },
  {
    thumbnail: "http://img.recipepuppy.com/223405.jpg",
    url: "http://www.grouprecipes.com/67612/asian-chicken-noodle-soup.html",
    ingredients: [
      "spinach",
      "broth",
      "carrot",
      "chicken",
      "chicken broth",
      "mint",
      "garlic",
      "ginger",
      "radish",
      "lime",
      "udon noodles",
      "onions",
      "hot pepper",
      "peas",
      "soup",
      "lemon grass",
      "fish sauce",
      "vegetable oil",
      "green onion",
      "red pepper flakes",
      "dark sesame oil"
    ],
    label: "Asian Chicken Noodle Soup Recipe "
  },
  {
    thumbnail: "",
    url:
      "http://www.recipezaar.com/Chez-Panisse-Brine-for-Pork-Chicken-and-Turkey-131506",
    ingredients: [
      "allspice",
      "bay leaves",
      "water",
      "thyme",
      "garlic",
      "juniper berries",
      "kosher salt",
      "sugar"
    ],
    label: "Chez Panisse Brine for Pork, Chicken and Turkey "
  },
  {
    thumbnail: "",
    url:
      "http://www.recipezaar.com/Chicken-Breasts-Stuffed-With-Olives-and-Goat-Cheese-113177",
    ingredients: [
      "chicken",
      "red pepper flakes",
      "oregano",
      "white wine",
      "parsley",
      "goat cheese",
      "garlic",
      "kalamata olive",
      "milk",
      "olive oil",
      "salt"
    ],
    label: "Chicken Breasts Stuffed With Olives and Goat Cheese "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Ask-for-More-Chicken-332993",
    ingredients: [
      "onion soup mix",
      "carrot",
      "celery",
      "chicken",
      "chutney",
      "water",
      "vegetable oil",
      "mayonnaise",
      "onions",
      "potato"
    ],
    label: "Ask for More Chicken "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Chicken-Quesadillas-Homemade-200392",
    ingredients: [
      "chicken",
      "monterey jack cheese",
      "flour tortillas",
      "jalapeno",
      "mozzarella cheese",
      "onions",
      "tomato",
      "vegetable oil"
    ],
    label: "Chicken Quesadillas Homemade "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/BBQ-Chicken-Pizza-144689",
    ingredients: [
      "chicken",
      "brown sugar",
      "cayenne",
      "garlic salt",
      "green pepper",
      "honey",
      "italian cheese blend",
      "salad dressing",
      "margarine",
      "molasses",
      "onions",
      "barbecue sauce",
      "black pepper",
      "prepared pizza crust",
      "provolone cheese",
      "ranch dressing",
      "salt"
    ],
    label: "BBQ Chicken Pizza "
  },
  {
    thumbnail: "",
    url: "http://www.grouprecipes.com/65487/basic-chicago-style-pizza.html",
    ingredients: [
      "pizza",
      "vegetable oil",
      "cornmeal",
      "water",
      "flour",
      "sausage",
      "provolone cheese",
      "olive oil",
      "tomato",
      "yeast",
      "pepperoni",
      "salt",
      "sugar",
      "basil",
      "oregano"
    ],
    label: "Basic Chicago-style Pizza Recipe "
  },
  {
    thumbnail: "http://img.recipepuppy.com/152332.jpg",
    url: "http://www.recipezaar.com/BBQd-Cheeseburger-Pizza-299376",
    ingredients: [
      "barbecue sauce",
      "cheddar cheese",
      "onions",
      "tomato",
      "dill pickle",
      "dill relish",
      "parsley",
      "french dressing",
      "garlic powder",
      "ground beef",
      "lettuce",
      "mayonnaise",
      "mozzarella cheese",
      "pizza dough",
      "mustard"
    ],
    label: "BBQ'd Cheeseburger Pizza "
  },
  {
    thumbnail: "http://img.recipepuppy.com/623733.jpg",
    url:
      "http://www.recipezaar.com/Healthy-Italian-Bread-Sticks-or-Pizza-Crust-252423",
    ingredients: [
      "brown sugar",
      "garlic powder",
      "italian seasoning",
      "olive oil",
      "onion powder",
      "salt",
      "flour",
      "water",
      "yeast"
    ],
    label: "Healthy Italian Bread Sticks or Pizza Crust "
  },
  {
    thumbnail: "",
    url: "http://www.recipezaar.com/Bacon-Cheeseburger-Pizza-205270",
    ingredients: [
      "bacon",
      "black pepper",
      "cheddar cheese",
      "garlic",
      "ground beef",
      "mozzarella cheese",
      "onions",
      "parmesan cheese",
      "pizza sauce",
      "salt"
    ],
    label: "Bacon Cheeseburger Pizza "
  },
  {
    thumbnail: "",
    url:
      "http://www.recipezaar.com/Cinnamon-Pizza-Sticks-With-Dipping-Glaze-167598",
    ingredients: ["butter", "cinnamon", "pizza dough", "sugar"],
    label: "Cinnamon Pizza Sticks With Dipping Glaze "
  },
  {
    thumbnail: "",
    url:
      "http://www.recipezaar.com/Gluten-Free-Pepperoni-Pizza-Quesadilla-302814",
    ingredients: [
      "mozzarella cheese",
      "nonstick cooking spray",
      "pizza sauce",
      "tortilla",
      "pepperoni"
    ],
    label: "Gluten Free Pepperoni Pizza Quesadilla "
  },
  {
    thumbnail: "",
    url: "http://allrecipes.com/Recipe/Italian-Escarole-Pizza/Detail.aspx",
    ingredients: [
      "garlic",
      "escarole",
      "mozzarella cheese",
      "olive oil",
      "pizza sauce",
      "salt"
    ],
    label: "Italian Escarole Pizza "
  },
  {
    thumbnail: "http://img.recipepuppy.com/8938.jpg",
    url:
      "http://allrecipes.com/Recipe/Goat-Cheese-Arugula-Pizza---No-Red-Sauce/Detail.aspx",
    ingredients: [
      "arugula",
      "garlic",
      "olive oil",
      "pesto",
      "roma tomato",
      "pizza crust"
    ],
    label: "Goat Cheese Arugula Pizza - No Red Sauce! "
  },
  {
    thumbnail: "http://img.recipepuppy.com/34541.jpg",
    url:
      "http://www.recipezaar.com/EAZY-PEEZY-PIZZA-DOUGH-Bread-Machine-Pizza-Dough-35805",
    ingredients: [
      "bread flour",
      "yeast",
      "olive oil",
      "salt",
      "sugar",
      "water"
    ],
    label: "Easy Peezy Pizza Dough (Bread Machine Pizza Dough) "
  }
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



