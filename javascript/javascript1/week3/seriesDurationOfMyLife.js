const seriesDurations = [
  {
    title: 'World Trip',
    days: 4,
    hours: 2,
    minutes: 0,  
  },
  {
    title: 'Princess',
    days: 3,
    hours: 6,
    minutes: 0,
  },
  {
    title: 'History of DK',
    days: 4,
    hours: 12,
    minutes: 0,
  }
]

function seriesDurationInLifeSpan(age){
  const lifeSpaninminutes=age*365*24*60;         
  let  allSeriesPercentage=0;

  for(i=0;i<seriesDurations.length;i++){
   const totalTimeOfSeries=(seriesDurations[i].days*24*60) + (seriesDurations[i].hours*60) + seriesDurations[i].minutes;
   const seriesPercentage= (totalTimeOfSeries/lifeSpaninminutes)*100;
   console.log(seriesDurations[i].title + "  " + "took" + " " + seriesPercentage.toFixed(3) +" "+ "%"+" "+ "of my life");
   allSeriesPercentage += seriesPercentage;
   
  }
  return allSeriesPercentage.toFixed(2);
}
const totalSeriesTimeInLifeSpan=seriesDurationInLifeSpan(80);
console.log("In total that is"+" "+ totalSeriesTimeInLifeSpan+" "+ "%"+" "+ "of my life");