const firstWords = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","holiday","LongWeekend","Easter"];
const secondWords = ["Html","Css","BoootStrap","Javascript","Jquery","Nodejs","Reactjs","Databases","coding","Jobsearch"];


const randomNumber = Math.floor(Math.random() * 10);

const startupName = (firstWords[randomNumber] + " " +secondWords[randomNumber]);
const resultStartup = "The startup: " + startupName + " contains " + startupName.length + " characters.";

console.log(resultStartup);