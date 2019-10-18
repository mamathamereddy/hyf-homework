//1.Text Called after 2.5 seconds
const logoutText = () => {
  console.log ('called after 2.5 sec');
};
setTimeout (logoutText, 2500);

//or
//setTimeout(() => {console.log("called after 2.5 sec")}, 2500);


//2. function to show the script with delay
function logAfterDelay (delay, stringToLog) {
  setTimeout (() => console.log (stringToLog), delay);
}
logAfterDelay (3500, 'the string logged after 3.5sec');


//3.log out the text with delay when button is clicked
const button1 = document.getElementById ('btn1');
button1.addEventListener ('click', function () {
  setTimeout (() => {
    console.log ('called after 1.5 sec');
  }, 1500);
});

//-------------or-----------------------
/* const button1=document.getElementById("btn1")
 const delay =() =>{
  setTimeout(() => {console.log("called after 1.5 sec")}, 1500)
}
button1.addEventListener('click',delay)   */

//4.loggingout planets when function is called
const earthLogger = () => console.log ('Earth');
const saturnLogger = () => console.log ('Saturn');

function planets (planetLogFunction) {
  planetLogFunction ();
}
planets (earthLogger);
planets (saturnLogger);


//5.log location
const p = document.getElementById ('para');
const button2 = document.getElementById ('btn2');
button2.addEventListener ('click', () => {
  navigator.geolocation.getCurrentPosition (showPosition);
});

function showPosition (position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  p.innerHTML = 'Latitude: ' + latitude + '<br>Longitude: ' + longitude;
  map (latitude, longitude);
}


//6.Optional Now show that location on a map using fx the Google maps api
function map (lat, lng) {
  map = new google.maps.Map (document.getElementById ('map'), {
    center: {lat, lng},
    zoom: 8,
  });
  console.log(map)
}

 //7. function with different delays and different callback functions
  function runAfterDelay(delay,callback){
    setTimeout(callback(),delay*1000)
  }
  runAfterDelay(4,function(){
    console.log("should be logged after 4 sec in run")
  }) 


//8.doubleclick
document.addEventListener('dblclick',()=>console.log("double click!"));

//9.joke creater
function jokeCreator (tellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (tellFunnyJoke) {
    logFunnyJoke ();
  } else{
    logBadJoke ();
  }
}

function logFunnyJoke () {
  console.log ('Its funny,i cannot stop laughing');
}
function logBadJoke () {
  console.log ('Its not funny,i donot like the joke');
}
jokeCreator (true, logFunnyJoke, logBadJoke);
jokeCreator (false, logFunnyJoke, logBadJoke);
jokeCreator (logFunnyJoke, logBadJoke);
