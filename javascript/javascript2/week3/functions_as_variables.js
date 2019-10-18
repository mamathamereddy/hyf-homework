//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const array = [
  function func1 () {
    const a = 7;
    const b = 10;
    console.log("result:"+(a + b)+"----"+"I am Called from function1 in array of functions");
  },
  function func2 () {
    const a = 23;
    const b = 79;
   console.log ("result:"+(a + b)+"----"+'I am Called from function2 in array of functions');
  },
  function func3 () {
    const a = 2;
    const b = 3;
    console.log("result:"+(a % b)+"----"+'I am Called from function3 in array of functions');
  },
];
array.forEach (item => item ());


//Create a function as a const and try creating a function normally. Call both functions.
const constFunction = () => {
  const firstname = "Mamatha";
  const lastName = "Mereddy";
  console.log("user FullName : " + firstname + " " + lastName + "------" + 'I am from function as a const');
};

function normalFunction() {
  const firstname = "Mamatha";
  const lastName = "Mereddy";
  console.log("user FullName : " + firstname + " " + lastName + "------" + 'I am a normal function');
}
constFunction();
normalFunction();


//Create an object that has a key whose value is a function. Try calling this function.
const cake = {
  flavor: "strawberry",
  occasion: "birthday",
  describe: function () {
    console.log("The " + cake.occasion + " cake has a " + cake.flavor + " flavor" + "-----" + " called from object that has a key whose value is a function");
  }
};
cake.describe()
