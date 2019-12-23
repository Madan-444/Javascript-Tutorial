
let myobj = {
    'name' :'Madan',
    isActive : true,
    marks:[100,90,80,70],
    'hubby': 'to become pro programmer'
}

console.log(myobj)
console.log(myobj['isActive']);
console.log(myobj['name'])
console.log(myobj.marks)

const age = 27;

switch(age){
    case 18:
        console.log('You are 18');
        break;
    case 28:
        console.log('You are 28');
        break;
    case 36:
        console.log('You are 36');
        break;
    default:
        console.log('You are asshole')

}
let arr = [2,4,5,6,2,8,76];
// arr.forEach(function(element){
//     console.log(element);
// })
for(i=0; i<arr.length; i++){
    const jpani = arr[i];
    console.log(jpani);
}
let obj = {
    intro :'Madan',
    age : 22,
    type:'Very intelligence',
    os : 'Windows'
}
for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}












