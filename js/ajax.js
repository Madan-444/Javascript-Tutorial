console.log("This is ajax live server");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("you have clicked the fetchbtn"); 
    //INSTANTIATE AN XHR OBJECT
    const xhr = new XMLHttpRequest();
    //open the object
    xhr.open('GET','js/harry.txt',true);
    //true means asynchronous

    //What to do on progess
    xhr.onprogress = function(){
        console.log('on progess')
    }
    //what to do when response is ready
    xhr.onload = function(){
        console.log(this.responseText)
    }
    //send the reqeuest
    xhr.send();
}