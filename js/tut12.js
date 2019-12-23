console.log("This is tuts 12.js");
// let a = document;
// a = document.all;
// // a = document.forms;
// // Array.from(a).forEach(function(element){
// //     console.log(element);
// // });
// a = document.links;
// console.log(a)
let element = document.getElementById('myfirst');
//element = element.childNodes;
// element.style.color = 'red'

element.innerText = 'Madan is very Hardworking man';
let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');

//multi line selector
let elem = document.getElementsByClassName('child');
elem = document.getElementsByClassName('container');
elem = document.getElementsByTagName('div');
Array.from(elem).forEach(function(element){
    console.log(element);
    element.style.color = 'blue';
})
console.log(elem)