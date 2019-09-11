const class07Students = [];
function addStudentToClass(studentName) {
    
    if(studentName === 'Queen'){
        class07Students.push(studentName);
    }
    else if(class07Students.indexOf(studentName) !== -1){
        console.log("Student " +studentName+" is already in the class")
    }
    else if((class07Students.length < 6) && studentName !== ''){
        class07Students.push(studentName);
    }
    else{
        console.log("Cannot add more students to class 07 or may be string is empty");
    }
}

function getNumberOfStudents() {
  return "No.of students in class is : "+ class07Students.length;
}

addStudentToClass('Machile');
addStudentToClass('Maria');
addStudentToClass('Rishi');
addStudentToClass('Manoha');
addStudentToClass('Janne');
addStudentToClass('Jumni');
addStudentToClass('Queen');
//addStudentToClass('Mamatha');
//addStudentToClass('');
//addStudentToClass('Maria');

console.log(class07Students);
console.log(getNumberOfStudents());