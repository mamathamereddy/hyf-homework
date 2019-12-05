const express=require("express");
const app=express();
const fs=require("fs");

// Read and Parse reservation file
const reservation = fs.readFileSync(__dirname+'/../data/reservation.json', "utf-8");
const parsedfile=JSON.parse(reservation)

// get the list of random reservations from bd
app.get("/", (req, res)=>{
  const randomreservation=parsedfile[Math.floor(Math.random() * parsedfile.length)]
  res.json(randomreservation)
})
module.exports = app;