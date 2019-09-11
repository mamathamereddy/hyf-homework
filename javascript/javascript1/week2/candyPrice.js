
let boughtCandyPrices=[]
function addCandy(candyType,weight){
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
    /*for ( let i = 0; i< boughtCandyPrices.length; i++)
     {
      total +=  boughtCandyPrices[i]; 
     }*/

     let i=0
     while(i< boughtCandyPrices.length){
      total +=  boughtCandyPrices[i];
      i++;
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
