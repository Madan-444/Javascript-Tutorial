console.log('This is king');

//Object literal
let obj = {
    name:'Madan',
    channel:'Day with Dreams',
    address:'ktm', 
}

function Objt(givenName,givenChannel){
    this.name = givenName;
    this.channel = givenChannel;
}

Objt.prototype.getName = function(){
    return this.name;
}
Objt.prototype.setName = function(newName){
    this.name = newName;
}
let obj2 = new Objt("Madan" ,"Wishes Magar");
console.log(obj2); 
console.log(obj2.setName('Becool'))