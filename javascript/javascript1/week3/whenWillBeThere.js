const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function convertTime(travelInformation){
  const timeInMins=(travelInformation.destinationDistance/travelInformation.speed)*60
  const hours=Math.floor( timeInMins / 60 );
  const mins=Math.round(  timeInMins % 60 );
  return hours + " hours and " + mins + " mins ";
}
const travelTime=convertTime(travelInformation)
console.log("Will be there in:",travelTime); 


