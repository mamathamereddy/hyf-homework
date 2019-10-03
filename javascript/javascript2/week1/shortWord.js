const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWord (words) {
  let shortword = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < shortword.length) {
      shortword = words[i];
    }
  }
  console.log ('shortest word in given array is: ' + shortword);
}
shortestWord (danishWords);


