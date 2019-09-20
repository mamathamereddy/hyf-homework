const notes=[];
function addNote(content,id){
  if(typeof(content==="string" && typeof(id==="number"))){
    notes.push({
      content,
      id
    });
  }
  else{
    "The value of the keys should be the value of the corresponding parameters."
  }
}
addNote("Note on fuzzy search",2);
addNote("Note on duplicate values of array",1);
//console.log(notes);

//Get a note
function getNoteFromId(id){
  for(let i=0;i<notes.length;i++){
    if (notes[i].id === id){
      return notes[i].content;
  }
  }
  return "Not valid id."
}
console.log(getNoteFromId(1));
console.log(getNoteFromId());
console.log(getNoteFromId('2'));

//Get all notes
function getNotes(){
    return notes;
}
console.log(getNotes());

//Log out notes
function logOutNotesFormatted(){
  for(let i = 0; i < notes.length; i++){
      console.log("The note with id :" +notes[i].id +" has the following note text: "+notes[i].content); 
  }   
}
console.log(logOutNotesFormatted());


