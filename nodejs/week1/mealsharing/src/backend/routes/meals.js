const express = require ('express');
const app = express ();

const fs = require ('fs');

// Read and Parse meals file
const data = fs.readFileSync (__dirname + '/../data/meal.json', 'utf-8');
const meals = JSON.parse (data);

//const mealJson = require("../data/meal.json")
// get the list of meals from bd
app.get ('/', (request, response) => {
  response.json (meals);
});

// Add reviews
const dataReview = fs.readFileSync (__dirname + '/../data/review.json', 'utf8');
const reviews = JSON.parse (dataReview);
meals.forEach (meal => {
  meal.reviews = reviews.filter(review => review.mealId === meal.id);
}); 

module.exports = app;
