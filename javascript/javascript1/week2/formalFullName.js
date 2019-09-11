function getFullName(firstName,surName,useFormalName){
 if(useFormalName){
    return "Lord "+ firstName+" "+ surName;
  }
  /* else if(useFormalName===""){
    return  " Formal name is undefined "+firstName+" "+ surName
  }*/
  else{
    return  firstName+" "+ surName;
  }
 
}

const FullName1=getFullName("Mamatha" ,"Vangala",true)
const FullName2=getFullName("Mamatha" ,"Mereddy","")

console.log(FullName1);
console.log(FullName2);