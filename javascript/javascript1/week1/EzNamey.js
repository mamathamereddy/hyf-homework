const firstWords = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","holiday","LongWeekend","Easter"];
const secondWords = ["Html","Css","BoootStrap","Javascript","Jquery","Nodejs","Reactjs","Databases","coding","Jobsearch"];


const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName = (firstWords[randomNumber1] + " " +secondWords[randomNumber2]);
const resultStartup = "The startup: " + startupName + " contains " + startupName.length + " characters.";

console.log(resultStartup);