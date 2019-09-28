
const positive = ['happy','super','mega','awesome','intresting','excited','good'];
const negative = ['sad', 'ugly', 'boring', 'bad', 'not', 'hate'];

function getSentimentScore (string) {
  splitstring = string.split (' ');
  const positiveWords = [];
  const negativeWords = [];
  let score = 0;
  for (let i = 0; i < splitstring.length; i++) {
    if (positive.includes(splitstring[i])) {
       score += 1;
        positiveWords.push(splitstring[i]);
       
    } else if (negative.includes(splitstring[i])) {
        score -= 1;
        negativeWords.push(splitstring[i]);
        
    }
}
return {score,positiveWords, negativeWords};
}

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy ');
const sentimentScoreObject2=getSentimentScore('I am  super  happy  because i hate to be sad and ugly  ');

console.log(sentimentScoreObject); 
console.log(sentimentScoreObject2); 
