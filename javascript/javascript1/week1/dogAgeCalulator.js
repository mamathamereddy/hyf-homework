const dogYearOfBirth = 1957;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const humanYear = dogYear / 7;

const shouldShowResultInDogYears = true;

 if(shouldShowResultInDogYears === false)
 {
    console.log("your dog will be" + " "+ dogYear +" "+ "dog years old in" + " "+ dogYearFuture);
 }
    else
    {
    console.log("your dog will be" + " "+ humanYear +" "+ "human years old in" + " "+ dogYearFuture);
    }