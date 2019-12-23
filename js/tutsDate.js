console.log('This is console of date object');
// let date = new Date();
// console.log(date);
// let otherdate = new Date('january 13 2019');
// console.log(otherdate);
// var a;
// a = otherdate.getDay();
// a = otherdate.getDate();
// a = otherdate.getTime();
// a = otherdate.getMonth();

// console.log(a);
// ---------tut25 exercise----------------
let divElm =document.createElement('div');
let val = localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElm.appendChild(text);
divElm.setAttribute('id','elem');
divElm.setAttribute('class','elem');

divElm.setAttribute('style','border:2px solid black; width:154px; margin:34px; padding:23px;')


let container = document.querySelector('.container');
let first = document.getElementById('myfirst');
// Insert the element befor element first

container.insertBefore(divElm,first);

console.log(divElm,container,first);
divElm.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
        let html =elem.innerHTML;
    divElm.innerHTML =  `<textarea class="form-control textarea" id = 'textarea' rows='3'></textarea>`;
        
    }
    // listen to the blue event
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML= textarea.value;
        localStorage.setItem('text',textarea.value);
    })
});

