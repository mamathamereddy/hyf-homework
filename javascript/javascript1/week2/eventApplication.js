const weekdays=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function getEventWeekday(day){
  const date=new Date();
  const today=date.getDate();
  const eventDay =(day + today)% 7;
    return "The event is on: " + weekdays[eventDay];
   
}
console.log(getEventWeekday(9));

