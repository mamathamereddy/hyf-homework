const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = (dogYearFuture - dogYearOfBirth)*7;
const humanYear = dogYear / 7;
let shouldShowResultInDogYears = false;

 if(shouldShowResultInDogYears)
 {
    console.log("your dog will be" + " "+ dogYear +" "+ "dog years old in" + " "+ dogYearFuture);
 }
    else
    {
    console.log("your dog will be" + " "+ humanYear +" "+ "human years old in" + " "+ dogYearFuture);
    }