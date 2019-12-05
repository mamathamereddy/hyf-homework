const express = require("express");
const app = express();

const fs=require("fs");

// Read and Parse meals file
const data = fs.readFileSync(__dirname+'/../data/meal.json', "utf-8");
const meals = JSON.parse(data);

//const mealJson = require("../data/meal.json")
// get the list of meals from bd
app.get("/",(request,response)=>{
  response.json(meals)
})

// Add reviews to the meals 
const dataReview= fs.readFileSync(__dirname + "/../data/review.json", "utf8");
const reviews = JSON.parse(dataReview);

meals.forEach(meal => {
  meal.review = [];
  for(let review of reviews){
    if (meal.id === review.meal_id){
      meal.review.push(review);
    }
  }
});

module.exports = app