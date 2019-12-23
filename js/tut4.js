const name='Madan'
console.log('My name is '+ name);
let var1 = 56;
console.log(var1),(typeof var1);
let datNepal = new Date()
console.log(datNepal)

let htmlPage = `Hello ${name},
            <h1>This is templates literals and this is included in es6 javascript version.</h1>
            <p> Do you know what var1 is?
            aslo print ${datNepal}</p>
            `;
document.body.innerHTML = htmlPage;
