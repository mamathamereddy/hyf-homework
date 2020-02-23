const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.json()); // Parse JSON bodies (as sent by API clients)

const port = process.env.PORT || 5000;

// calculator using :param
//calculator/multiply?firstParam=1&secondParam=2
app.get("/calculator/add", (req, res) => {
  const numbers = req.query;
  const arrValues = [].concat.apply([], Object.values(numbers));
  if (arrValues.filter(value => Object.is(parseInt(value), NaN)).length > 0) res.send("Parameters are not numbers");
  else {
      const addition = arrValues.reduce((sum, value) => sum +=  parseInt(value), 0);
      res.send(`Numbers are: ${arrValues}. Addition is equal to ${addition}.`);
  }
});

app.get("/calculator/substract", (req, res) => {
  const numbers = req.query;
  const arrValues = [].concat.apply([], Object.values(numbers));
  if (arrValues.filter(value => Object.is(parseInt(value), NaN)).length > 0) res.send("Parameters are not numbers");
  else {
      const substraction = arrValues.reduce((sum, value) => sum -= parseInt(value));
      res.send(`Numbers are: ${arrValues}. Substraction is equal to ${substraction}.`);
  }
});

app.get("/calculator/multiply", (req, res) => {
  const numbers = req.query;
  const arrValues = [].concat.apply([], Object.values(numbers));  
  if (arrValues.filter(value => Object.is(parseInt(value), NaN)).length > 0) res.send("Parameters are not numbers");
  else {
      const multiplication = arrValues.reduce((sum, value) => sum *= parseInt(value), 1);
      res.send(`Numbers are: ${arrValues}. Multiplication is equal to ${multiplication}.`);
  }
});

app.get("/calculator/divide", (req, res) => {
  const numbers = req.query;
  const arrValues = [].concat.apply([], Object.values(numbers));  
  if (arrValues.filter(value => Object.is(parseInt(value), NaN)).length > 0) res.send("Parameters are not numbers");
  else {
      const division = arrValues.reduce((sum, value) => sum /= parseInt(value));
      res.send(`Numbers are: ${arrValues}. Division is equal to ${division}.`);
  }
}); 

//calculator using req.body
let key = "";
app.get("/calculator", (req, res) => {
    const numbers = req.query;
    const arrValues = [].concat.apply([], Object.values(numbers));

    if (arrValues.filter(value => Object.is(parseInt(value), NaN)).length > 0) res.send("Parameters are not numbers");
    if (key === "add") {
        const addition = arrValues.reduce((sum, value) => sum +=  parseInt(value), 0);
        res.send(`Numbers are: ${arrValues}. Addition is equal to ${addition}.`);
    } else if (key === "substract") {
        const substraction = arrValues.reduce((sum, value) => sum -= parseInt(value));
        res.send(`Numbers are: ${arrValues}. Substraction is equal to ${substraction}.`);
    } else if (key === "multiply") {
        const multiplication = arrValues.reduce((sum, value) => sum *= parseInt(value), 1);
        res.send(`Numbers are: ${arrValues}. Multiplication is equal to ${multiplication}.`);
    } else if (key === "divide") {
        const division = arrValues.reduce((sum, value) => sum /= parseInt(value));
        res.send(`Numbers are: ${arrValues}. Division is equal to ${division.tofixed(3)}.`);
    } 
});     //http://localhost:5000/calculator/divide?firstParam=1&secondParam=2&secondParam=4-----Numbers are: 1,2,4. Division is equal to 0.125.
app.post("/calculator", (req, res) => {
  key = req.body.key;
  res.send("Sent key");
});


app.listen(port, () => console.log(`server starting at port ${port}`));