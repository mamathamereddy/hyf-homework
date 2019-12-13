const express = require ('express');
const router = express ();
const port = 3000;

router.get ('/numbers/add', (req, res) => {  //http://localhost:3000/numbers/add?first=3&second=7
  const {first} = req.query;
  const {second} = req.query;
  const add = Number (first) + Number (second);
  res.send (`${first} + ${second} = ${add}`);
});

router.get ('/numbers/multiply/:first/:second', (req, res) => {   //http://localhost:3000/numbers/multiply/4/5
  const {first} = req.params; 
  const {second} = req.params;
  const multiply = first * second;
  res.send (`${first} *${second} =${multiply}`);
});

router.listen (port, () => console.log (`server start at port ${port}`));
