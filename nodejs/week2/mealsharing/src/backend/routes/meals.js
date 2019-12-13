const express = require ('express');
const router = express ();

const fs = require ('fs');
// Read and Parse meal file
const data = fs.readFileSync (__dirname + '/../data/meal.json', 'utf-8');
const meals= JSON.parse (data);

// get the list of  meal from bd
router.get ('/', (req, res) => {     
  res.json (meals);      //http://localhost:8080/meals
});

//Respond with the json for the meal with the corresponding id
router.get ('/:id', (req, res) => {             
  const id = req.params.id;
  const mealWithId = meals.filter (meal => meal.id === parseInt (id));
  //if there is no meal with the requested id in meals.json? or if the users writes a string as id?
  if (mealWithId.length < 1 || typeof(id)!="number") {
    responseMeals = '<h1>Meal id does not exist!Please give a valid id</h1>';
  } else {
    // If there is a match
    responseMeals = mealWithId;
  }
  res.send (responseMeals);       //http://localhost:8080/meals/3
});

router.get ('/api/meals', (req, res) => {
  const parameters = {
    maxPrice: req.query.maxPrice,
    title: req.query.title,
    createdAfter: req.query.createdAfter,
    limit: req.query.limit,
  };
  if (parameters.maxPrice) { 
    smallerThanMaxPrice = meals.filter ( meal => meal.price < parameters.maxPrice);
    res.send (smallerThanMaxPrice);    //http://localhost:8080/meals/api/meals?maxPrice=30
  } 
  else if (parameters.title) { 
    matchedTitle = meals.filter (meal =>meal.title.toLowerCase ().includes (parameters.title.toLowerCase ()));
    res.send (matchedTitle);         //http://localhost:8080/meals/api/meals?title=pizza
  } 
  else if (parameters.createdAfter) {  
    const createdAfterMeals = meals.filter (meal => {
      return new Date (meal.createdAt) > new Date (parameters.createdAfter);
    });
    res.send (createdAfterMeals);      //http://localhost:8080/meals/api/meals?createdAfter=2019-10-28
  } 
  else if (parameters.limit) {    
    mealsLimit = meals.slice (0, parameters.limit);
    res.send (mealsLimit);       //http://localhost:8080/meals/api/meals?limit=4
  } 
  else {    
    res.send ('<h1>invalid query parameter</h1>');           //http://localhost:8080/meals/api/meals?ddgdj
  }
});
module.exports = router;
