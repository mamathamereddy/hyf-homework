const express = require ('express');
const app = express ();
const fs = require ('fs');

// Read and Parse meals file
const dataMeal = fs.readFileSync (__dirname + '/../data/meal.json', 'utf8');
const meals = JSON.parse (dataMeal);

// get the list of large meals from bd
app.get ('/', function (req, res) {
  const largeMeal = meals.filter (meal => meal.maxNumberOfGuests > 10);
  res.send (largeMeal);
});

// Add reviews 
const dataReview = fs.readFileSync (__dirname + '/../data/review.json', 'utf8');
const reviews = JSON.parse (dataReview);
meals.forEach (meal => {
  meal.reviews = reviews.filter(review => review.mealId === meal.id);
});
 
module.exports = app;
