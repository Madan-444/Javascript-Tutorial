console.log("This is call back function");
const students = [
    {name:'harry', subject: 'javascript'},
    {name:'rohan', subject: 'machine learning'}
]
function enrollStudents(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log('The student has benn enrolled.');
        callback();
    },6000);
}
function getStudent(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str +=`<li> ${student.name}</li>  `
        });
        console.log('the student information :')
        document.getElementById('students').innerHTML = str;
    },2000);

}

let newStudent = {name:'Sunny',subject:'javascript'}
enrollStudents(newStudent, getStudent);
// getStudent();
 