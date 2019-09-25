const PeterHousevolume=8*10*10;
const volumeInMeters = [8*10*10,5*11*8];
const gardenSizeInM2 = [100,70];
const housePricePeter = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const housePriceJulia = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

if (housePricePeter < 2500000) {
    console.log("House is too expensive, Peter");
}
else {
    console.log("Great price for the house, Peter");
}

if (housePriceJulia < 1000000) {
    console.log("House is too expensive, Julia");
}
else {
    console.log("Great price for the house, Julia");
}

//rasmus
/*const volumeInMeters = [[8*10*10], [5*11*8]];
const gardenSizeInM2 = [100, 70];      
const petersHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const juliasHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
const pjHouseCost = [2500000,1000000];
const pjHadPaid = [[pjHouseCost[0] - petersHousePrice],[pjHouseCost[1] - juliasHousePrice]];
console.log("Peter has paid " + pjHadPaid[0] + " more than the actual house cost.");
console.log("Julia has paid " + pjHadPaid[1] + " less than the actual house cost.");
*/