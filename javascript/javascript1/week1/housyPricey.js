const PeterHousevolume=8*10*10;
const PetergardenSize=100;
const actualHouseCost=2500000;
const housePriceEstimated = PeterHousevolume * 2.5 * 1000 + PetergardenSize * 300;
console.log("\nPeterhouse estimated price: "+housePriceEstimated);
console.log("Peter spend on buying house: "+actualHouseCost);

if(housePriceEstimated<=actualHouseCost)
  console.log("Peter brought the house in  expensive ");
  else
  console.log("Peter brought the house in  low price");


const JuliaHousevolume=5*11*8;
const JuliagardenSize=70;
const HouseCost=1000000;
housePriceEstimated = JuliaHousevolume * 2.5 * 1000 + JuliagardenSize * 300;
console.log("\nJulia house estimated price: "+housePriceEstimated);
console.log("Julia spend on buying house: "+HouseCost);

if(housePriceEstimated<=actualHouseCost)
  console.log("julia brought the house in low price ");
  else
  console.log("Julia  brought the house in expensive");

