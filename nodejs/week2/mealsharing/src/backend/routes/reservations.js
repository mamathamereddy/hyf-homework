const express = require ('express');
const router = express ();

const fs = require ('fs');
// Read and Parse reservation file
const data = fs.readFileSync (__dirname + '/../data/reservation.json', 'utf-8');
const reservation = JSON.parse (data);

//// get the list of all  reservations
router.get ('/', (req, res) => {
  res.json (reservation);
});

//Respond with the json for the reservation with the corresponding id
router.get ('/:id', (req, res) => {
  const {id} = req.params;
  const reservations = reservation.filter (reservation => {
    return reservation.id === parseInt (id);
  });
  res.send (reservations);     //http://localhost:8080/reservations/3
});

module.exports = router;
