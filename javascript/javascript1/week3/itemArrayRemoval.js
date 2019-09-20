const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

names.splice(names.includes(nameToRemove),1);     //using includes
console.log(names);

/*names.splice(names.indexOf(nameToRemove), 1);        //--------using indexof 
    console.log(names); */   


/*for(let i=names.length-1;i>=0;i--){                 // ----------using  for loop
  if( names[i]===nameToRemove){
    names.splice(i,1);
  }
}
console.log(names); */


/*const index = names.indexOf(nameToRemove);   // -----------using if
if (index !== -1) {
    names.splice(index, 1);
}
console.log(names); */
