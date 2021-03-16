// console.log('Hello madan')

// const myName = "Madan Rijal Magar"
// console.log(typeof myName)
// function namingPro(){ 
//     let myName = "Becool Rijal"
//     console.log("My name is: ",myName)
// }
// namingPro()

// console.log('fucking name',myName)

// string funtions 

// indexOf()
// lastIndexOf()
// CharAt()
// endsWith()
// includes()
// slice()
// split()

// let myStr;
// myStr = "<h1>The block statement is often called compound statement in other languages. It allows you to use multiple statements where JavaScript expects only one statement.</h1>"

// document.body.innerHTML = myStr
// myStr = myStr.concat("This is wrong.")
// console.log(myStr)
// console.log(myStr.indexOf('block'))
// console.log(myStr.lastIndexOf('is'));
// console.log(myStr.length)
// console.log(myStr.charAt(0))
// console.log(myStr.endsWith("wrong."))
// console.log(myStr.includes("statements"));
// let arryOfString = myStr.split('T')
// console.log(arryOfString)

// console.log(myStr.slice(0,4))
// console.log(myStr.slice(-34))
// let myMarks = [56,78,87,91,88]
// myMarks.forEach(i=> console.log(i))
// let totalMarks = 0;
// for(let i=0;i<5;i++) {
//     totalMarks += myMarks[i]
//     console.log(totalMarks) 

// }

// let persentage = (totalMarks/500)*100
// console.log(`${persentage}%`)
let ratings = [5, 4, 7];
let newRattings = []

// // Using for loop 
// for(let i =0; i<ratings.length;i++) {
//     let multipliedValue = ratings[i] *2
//     console.log(multipliedValue)
//     newRattings.push(multipliedValue)
// }
// console.log(newRattings)

// Using the forEach method 
ratings.forEach((i)=> {
    let j = i*2
    newRattings.push(j) 


})

console.log(newRattings)


// for(let i=0;i<ratings.length;i++) {
//     sum = sum + ratings[i]
// }
// console.log(sum)

// Naively expected output: 14
// Actual output: 0ws