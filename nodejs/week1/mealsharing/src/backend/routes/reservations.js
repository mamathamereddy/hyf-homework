const express = require ('express');
const app = express ();
const fs = require ('fs');

// Respond with the json for all reservations
const reservation = fs.readFileSync ( __dirname + '/../data/reservation.json', 'utf-8');

// get the list of reservation from bd
app.get ('/', (req, res) => {
  res.send(reservation);
});
module.exports = app;
