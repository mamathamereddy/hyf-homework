
//average of the parameter
const housePrices = [
  3000000,
  3500000,
  1300000,
  40000000,
  100000000,
  8000000,
  2100000,
];
function average (prices) {
  let sum = 0;
  for (i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  const avg = (sum / prices.length).toFixed (3);
  return avg;
}
//console.log("The Average of houseprices is: " + average(housePrices));


//median of the parameter
function median (numbers) {
  let numsLen = numbers.length;
  numbers.sort ();
  if (numsLen % 2 === 0) {        // is even
    median = prices[((pricesLength / 2) + ((pricesLength / 2) - 1)) / 2]; // (n/2 + (n/2)-1) / 2 // average of two middle numbers
  } else {         // is odd
    median = numbers[(numsLen - 1) / 2]; // middle number only
  }
  return median;
}
//console.log("The Median of  houseprices is: " + median(housePrices));

//function that calculates the median and the average and returns these two value in an object.
function findAverageAndMedian (prices) {
  let obj = {
    'Average value': average (housePrices),
    'Median value': median (housePrices),
  };
  return obj;
}
let averageAndMedian = findAverageAndMedian (housePrices);
console.log (averageAndMedian);


//render the prices and the average and median in a web page.
const ul = document.getElementById ('housePrices');
for (i = 0; i < housePrices.length; i++) {
  const li = document.createElement ('li');
  li.textContent = housePrices[i];
  ul.appendChild (li);
}

const averagePrice = document.getElementById ('averagePrice');
averagePrice.textContent = averageAndMedian['Average value'];

const medianPrice = document.getElementById ('medianPrice');
medianPrice.textContent = averageAndMedian['Median value'];
