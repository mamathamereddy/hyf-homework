let name = '';
const todo = [];
const favDish = [];
const events = [];

function getReply (command) {
  //Returning and wishing with name
  
  if (command.includes ('Hello my name is ')) {
    if (name) {
      return name + ' is already given';
    } else {
      name = command.slice (17, command.length);
      return 'Nice to meet you ' + name;
    }
  } else if (command.includes ('What is my name')) {
    if (name) {
      return 'Your name is ' + name;
    } else {
      return 'please enter your Name';
    }
  } 

  //Add Bike ride  to  calendar

  else if (command.includes (' to my calendar')) {
    const event = command.slice (4, command.indexOf ('the') - 1);
    const date = command.slice (command.indexOf ('the') + 3, command.indexOf ('to') - 1);
    events.push ({
      event,
      date,
    });
    console.log (events);
    return events[events.length - 1].event + ' added to your calendar';
  } 

  //Add to my todo
  else if (command.includes ('Add') || command.includes (' to my todo')) {
    const x = command.slice (4, command.length - 11);
    todo.push (x);
    return todo[todo.length - 1] + 'added to a list of todo';
  } 

  //Remove from my todo
  else if (command.includes ('Remove') || command.includes ('from my todo')) {
    const remtodo = command.slice (6, command.length - 12);
    todo.splice (todo.includes (remtodo), 1);
    return 'Removed' + remtodo + ' from your todo';
  } 

  //list of todo
  else if (command.includes ('what is on my todo')) {
    return 'your todo list:' + todo;
  } 

   //what's Today
  else if (command.includes ('What day is it today?')) {
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December',];
    const today = new Date ();
    const dayDate = today.getDate ();
    const year = today.getFullYear ();
    const month = monthNames[today.getMonth ()];
    return 'Today is ' + dayDate + '.of ' + month + ' ' + year;
  } 

  // operators.
  else if ((command.includes ('what is ') && command.includes ('-')) ||command.includes ('*') ||command.includes ('+') ||command.includes ('/') ||command.includes ('%')) {
    const calc = command.slice (8, command.length);
    const result = eval (calc);        //The eval() function evaluates or executes an argument eval("x * y")
    return 'the result of ' + calc + '= ' + result;
  } 

  //My favorite dish
  else if (command.includes ('My favorite dish is spaghetti')) {
    favDish.push (command.slice (20, command.length));
    return 'saved your fav dish';
  } 

  //returning favorite dish
  else if (command.includes ('What is my favorite dish ')) {
    return 'your favourite dish is: ' + favDish;
  } 
  //Set a timer
  else if (command.includes ('Set a timer for 1 minutes ')) {
    const min = command.slice (16, 18);
    const minutesinmillisec = min * 60 * 1000; //coverting minutes into milliseconds
    setTimeout (function () {
      console.log ('Timer finished/stopped ');
    }, minutesinmillisec);
    return 'Timer set for ' + min + 'minutes';
  }
}



//console.log(getReply('What is my name'));
//console.log(getReply('Hello my name is qqqqqqq'));
//console.log(getReply('What is my name'));
//console.log(getReply('Hello my name is qqqqqqq'));
//console.log(getReply('Add fishing to my todo'));
//console.log(getReply('Add singing in the shower to my todo'));
//console.log(getReply('Remove fishing from my todo'));
//console.log(getReply('what is on my todo'));
//console.log(getReply('What day is it today?'));
// console.log(getReply('My favorite dish is spaghetti'));
// console.log(getReply('What is my favorite dish '));
//console.log(getReply('What is 3*3 '));
//console.log(getReply('Set a timer for 1 minutes '));
//console.log(getReply('Add Bike ride the 22/9-2019 to my calendar'));
console.log(getReply('Add My Birthday the 27-9-2019 to my calendar'));
