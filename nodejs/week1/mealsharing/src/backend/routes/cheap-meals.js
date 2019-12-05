const express = require ('express');
const app = express ();
const fs = require ('fs');

// Read and Parse meals file
const dataMeal = fs.readFileSync (__dirname + '/../data/meal.json', 'utf-8');
const meals = JSON.parse (dataMeal);

// get the list of  cheap meals from bd
app.get ('/', (request, response) => {
  const cheapMeals = meals.filter (meal => meal.price <= 12);
  response.json (cheapMeals);
});

// Add reviews to the meals
const dataReview = fs.readFileSync (__dirname + '/../data/review.json', 'utf8');
const reviews = JSON.parse (dataReview);
meals.forEach (meal => {
  meal.reviews = [];
  reviews.forEach (
    review => (review.mealId === meal.id ? meal.reviews.push (review) : review)
  );
});

module.exports = app;
