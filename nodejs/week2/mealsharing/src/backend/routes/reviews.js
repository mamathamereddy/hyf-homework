const express = require ('express');
const router = express ();

const fs = require ('fs');
// Read and Parse review file
const data = fs.readFileSync (__dirname + '/../data/review.json', 'utf-8');
const review = JSON.parse (data);

//get the list of  all reviews
router.get ('/', (req, res) => {
  res.json (review);
});

//Respond with the json for the review with the corresponding id
router.get ('/:id', (req, res) => {
  const {id} = req.params;
  const reviews = review.filter (review => {
    return review.id === parseInt (id);
  });
  res.send (reviews);     //http://localhost:8080/reviews/5
});

module.exports = router;
