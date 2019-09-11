weekdays=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function getEventWeekday(day){

  let date=new Date();
 // console.log(date);
  let today=date.getDate();
  //console.log(today)
  let eventDay =day + today;
  //console.log(eventDay)

    if(eventDay > 7){
        eventDay = eventDay % 7;
        //console.log(eventDay);
    }
    return "The event is on: " + weekdays[eventDay];
   
}
console.log(getEventWeekday(9));

