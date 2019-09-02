let firstWords = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","holiday","LongWeekend","Easter"];
let secondWords = ["Html","Css","BoootStrap","Javascript","Jquery","Nodejs","Reactjs","Databases","coding","Jobsearch"];

const randomNumber = Math.floor(Math.random() * 10);
let startupName = (firstWords[randomNumber] + secondWords[randomNumber]).length;
console.log("The startup name is:" + firstWords[randomNumber ] + " " + secondWords[randomNumber] + " "+"contains"+" "+startupName+" "+"characters" );

