







//-------------const boughtCandyPrices = [];
function addCandy (candyType, weight) {
  if (candyType == 'sweet') {
    return boughtCandyPrices.push (0.5 * weight);
  } else if (candyType == 'chocolate') {
    return boughtCandyPrices.push (0.7 * weight);
  } else if (candyType == 'toffee') {
    return boughtCandyPrices.push (1.1 * weight);
  } else if (candyType == 'chewing-gum') {
    return boughtCandyPrices.push (0.03 * weight);
  }
}
addCandy ('sweet', 20);
addCandy ('chocolate', 15);
addCandy ('toffee', 8);
addCandy ('chewing-gum', 100);

console.log (boughtCandyPrices);

const amountToSpend = Math.random () * 100;
console.log ('Amount you have: ' + amountToSpend);

function canBuyMoreCandy () {
  let sum = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    sum = boughtCandyPrices[i] + sum;
  }
  console.log ('Amount you spend on candies:' + sum);
  if (sum < amountToSpend) {
    console.log ('You can buy more, so please do!');
  } else console.log ('Enough candy for you!');
}
canBuyMoreCandy ();
/*
let boughtCandyPrices=[]
function addCandy(candyType,weight){
  let price=0
  if (candyType === 'Sweet'){
       price = 0.5;
     } 
     else if(candyType === 'Chocolate'){
             price = 0.7;
     } 
     else if(candyType === 'Toffee'){
        price = 1.1;
     } 
     else if(candyType === 'Chewing-gum'){
         price = 0.03;

}
boughtCandyPrices.push(price * weight);
}
addCandy('Sweet', 20);
addCandy('Chocolate', 10);
addCandy('Toffee', 20);
addCandy('Chewing-gum', 10);
console.log("candy prices what you brought:"+boughtCandyPrices);

const amountToSpend=Math.random() * 100;
console.log("Amount you have:"+amountToSpend);

function canBuyMoreCandy(){
  let total = 0;
    for ( let i = 0; i< boughtCandyPrices.length; i++)
     {
      total +=  boughtCandyPrices[i]; 
     }
     console.log("total amount spend:"+total);


    if(total < amountToSpend)
    {
        console.log("You can buy more, so please do!");
    }else
    {
        console.log("Enough candy for you!");
    }
}
canBuyMoreCandy();
*/