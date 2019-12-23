console.log("this  is console");
class Employee{
    constructor(givenName,givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;

    }
    slogan(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return (2019 - this.experience);


    }
    static add(a,b){
        return a+b;

    }
}

class Programmer extends Employee{
    constructor(givenName,givenExperience, givenDivision,language,github){
    super(givenName,givenExperience, givenDivision);
    this.language = language;
    this.github = github;

    }

    
    favoriteLanguage(){
        if(this.language =='Python'){
            return "Python";
        }
        else{
            return "javascript";
        }
      
    }
    static multiply(a,b){
        return a*b;
    };
    


}
// harry = new Employee('Madan', 2,'First')
// console.log(harry)
// console.log(`Mr ${this.name} has started in `,harry.joiningYear());
// console.log(Employee.add(3,5))

madan = new Programmer('Wishes', 4,"lays",'Javascript','madan420');
console.log(madan);
console.log(madan.favoriteLanguage())
console.log(Programmer.multiply(3,6));
