const express = require ('express');
const app = express ();

const fs = require ('fs');
// Read and Parse reservation file
const data = fs.readFileSync (__dirname + '/../data/meal.json', 'utf-8');
const meals = JSON.parse (data);

// get the list of random meal from bd
app.get ('/', (request, response) => {
  const randomMeals = meals[Math.floor (Math.random () * meals.length)];
  response.json (randomMeals);
});

 // Add reviews to the meals
 const dataReview = fs.readFileSync (__dirname + '/../data/review.json', 'utf8');
 const reviews = JSON.parse (dataReview);
 meals.forEach (meal => {
   meal.reviews = reviews.filter(review => review.mealId === meal.id);
 }); 

module.exports = app;
