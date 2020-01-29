const express = require ('express');
const app = express ();
const fs = require ('fs');

// make a middleware the logs the the date and the request's method, each time the server gets a request
app.use ((req, res, next) => {
  console.log ('Date:', new Date ().toDateString ());
  console.log ('Request method:', req.method);
  next ();
});


const meals = require ('./routes/meals.js');
app.use ('/meals', meals);

const meal = require ('./routes/meal.js');
app.use ('/meal', meal);

const cheapmeals = require ('./routes/cheap-meals.js');
app.use ('/cheap-meal', cheapmeals);

const largemeals = require ('./routes/large-meals.js');
app.use ('/large-meals', largemeals);

const reservations = require ('./routes/reservations.js');
app.use ('/reservations', reservations);

const reservation = require ('./routes/reservation.js');
app.use ('/reservation', reservation);

// Add reviews to the meals



app.get ('/', (req, res) => res.send ('Error no page found'));

app.listen (5000, () => {
  console.log ('server started at port 5000....');
});
