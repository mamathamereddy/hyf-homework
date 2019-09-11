function whatToWear(temperature){
  if(temperature<0){
    return "Wear warm clothes,jackets,gloves,scrafs,hat,and warm boots"
  }
  else if(temperature <= 13){
    return "Wear jacket and boots";
}else if(temperature <= 20){
    return  "Wear light jacket and sneakers";
}else{
    return "Wear t-shirt, shorts and slippers";
}
}
const clothesToWear = whatToWear(-1);
console.log(clothesToWear);