const express = require ('express');
const router = express ();

const port = 8080;

//middleware function that logs out the time, a request was received and the path
router.use ((req, res, next) => {
  const date = new Date (Date.now ()).toLocaleString ();
  console.log (`Date:${date} \nrequest received for path:${req.url}`);
  next ();
});

const mealsRouter = require ('./routes/meals.js');
router.use ('/meals', mealsRouter);

const reservationsRouter = require ('./routes/reservations.js');
router.use ('/reservations', reservationsRouter);

const reviewsRouter = require ('./routes/reviews.js');
router.use ('/reviews', reviewsRouter);

router.listen (port, () => console.log (`server start at port ${port}`));






