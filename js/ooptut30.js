console.log("This is live Mad");
const proto = {
    slogan:function(){
        return `This company is the best`;
    },
    changeName:function(newName){
        this.name = newName;
    }
}   
const harry = Object.create(proto);
harry.name = 'Madan';
harry.role = "Programmer";
harry.changeName="harry2";
console.log(harry)
const Mosh = Object.create(proto);
Mosh.name='MOsh';
Mosh.role='Data Analysist';
console.log(Mosh)
console.log(`This is mosh object`,Mosh.slogan())

function Employee(name,salary,experience){
    this.name =name;
    this.salary = salary;
    this.experience = experience;
}
Employee.prototype.slogan = function(){
    return `This is the best Regards, ${this.name}`;
}
let madanObj = new Employee('Madan', 100000,'2years');
console.log(madanObj);

function Programmer(name,salary,experience,language,loveStatus){
    Employee.call(this, name, salary, experience,language ,loveStatus);
    this.language= language;
    this.loveStatus = loveStatus
}
Programmer.prototype.slogan = function(){
    return `This is the required charecterstics of the Programmer`;
}
let prog = new Programmer('Himal',49909,'3years','React-native','InRelationship');
console.log(prog);