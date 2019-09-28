function formatCreditCardNumber(number){
  const numberTostring = number.toString();
console.log(numberTostring)
const formatted=[]
  for(let i=0;i<numberTostring.length;i+=4){
    formatted.push(numberTostring.slice(i,i+4))
    
  } return formatted.join(' ');
}
const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);

