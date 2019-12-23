console.log('This is live server');
// define the object:
let car = {
    name:'Maruti Van',
    topSpeed :89,
    run:function(){
        console.log("car is running");
    }
}
console.log(car)
let a = car.topSpeed;
let b = car.name;
console.log(b);
console.log(a)
car.run();
function GereralCar(givenName,givenSpeed){
    this.name= givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`)
    };
    this.analyze = function(){
        console.log(
            `This car ${this.name} is slower by ${200-this.topSpeed} km/h than Mercetize`
        )
    };
}

car1 = new GereralCar('Nishan', 120);
car2 = new GereralCar('BMW',150);
taxi = new GereralCar('Lamorgini',190);
car3 = new GereralCar('Mercetize',200);
console.log(car1.run())
console.log(car1.analyze());
console.log(taxi.analyze())