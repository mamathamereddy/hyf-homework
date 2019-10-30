//Rewrite time
function rewrite (time) {
  return new Promise (function (resolve, reject) {
    setTimeout (() => {
      resolve ('I am called from rewrite promise');
    }, time * 1000);
  });
}
rewrite (3).then (function (value) {
  console.log (value);
});
 



//Rewrite geolocation

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position);
      reject("error");
    });
  });
}
getCurrentLocation()
  .then((position) => console.log(position))            // called when the users position is found
  .catch((error) => console.log(error));                // called if there was an error getting the users location
