const activities = [] ;
// Add the activities 
function addActivity(activity , duration ) {
  const todayDate = new Date();  
  const date = todayDate.toLocaleDateString();     
 if (!(typeof(date) === "string" && typeof(activity) === "string" && typeof(duration) === "number")) {
     return "Enter date & activity in text and duration as number";
 } else {
     activities.push({date,activity,duration});
 }
}

addActivity('Youtube', 22);
addActivity('Facebook', 26);
addActivity('Instagram', 15);
addActivity('LinkedIn', 15);

console.log(activities);

// ShowStatus
let sum =0 ;
const usageLimit =  80;
function showStatus() {
    for(let i =0 ; i < activities.length ; i++){
            sum +=  activities[i].duration;
    }  
    if(sum > usageLimit) {
      return("You have reached your limit, no more smartphoning for you!")
 } else {
     
   return "You have added "+activities.length +" activities.They amount to " +sum +" min. of usage"; 
 }
 }

console.log(showStatus());

//  Showing the number of actitivies for that specific day
const activityByDate= [] ;
const today  = new Date();
function addActivityByDate (date) {
    for(let i =0 ; i < activities.length ; i++){
        if ( activities[i].date === date){
            activityByDate.push(activities[i]);  
        }
    } 
     console.log("\nYou have" +activityByDate.length+ "activities on" +today.toLocaleDateString("en-UE"))  
}
addActivityByDate(today.toLocaleDateString("en-UE"));
console.log(activityByDate);



// Calculating the activity a user has spent the most time on
function getMaximumDurationActivity(){
    let result= 0;
    for(let i =0 ; i < activities.length ; i++){
        if(activities[i].duration > result){
            result = activities[i].duration+" mins on "+activities[i].activity;
        }
    }
         return result;
}
console.log("\nThe Maximum minutes that you spent is: " + getMaximumDurationActivity());

