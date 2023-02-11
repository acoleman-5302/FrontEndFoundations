class aClass {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    sayName(){
        alert(this.name);
    }

    sayAge(){
        alert(this.age);
    }
}

const myInstance = new aClass("Anna", 20) ;
myInstance.sayName();

class vehicle {
    constructor(make,model,year){
        this.make = make ;
        this.model = model ;
        this.year = year ;
    }
}

let myCar = new vehicle("Nissan","Rogue",2017);
console.log(myCar);


class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    run(){
        console.log(this.firstname +" " +this.lastname + " is running");
    }

    walk(){
        console.log(this.firstname +" " +this.lastname + " is walking");
    }

    greeting(){
        console.log("Hello nmy name is "+this.firstname+".");
    }
}

let anna = new Person("Anna", "Coleman");
anna.run();
anna.walk();
anna.greeting();

class Car{
    constructor(make,model,year){
        this._make = make;
        this._model=model;
        this._year=year;
    }

    get make(){
        return this._make;
    }

    set model(value){
        const possibleModels = ["Rogue","idk","idk again"];
        if (possibleModels.includes(value)){
            this._model= value;
        }
        else{
            throw Error(value + " is not a valid model");
        }
    }

    get description(){
        return this._year + " "+ this._make +" "+ this._model ;
    }
}

let myDadsCar = new Car("nissan", "Rogue", 2016);
myDadsCar._model = "volvo"; //should throw our an error bc does not match what we have allowed as a model option
myDadsCar.make; //doesnt behave like a method bc using get.
console.log(myDadsCar.description);

class Person2{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greeting(){
        console.log("Hello, my name is "+ this.name + " and I am "+this.age);
    }

}
//instances
let Andrew = new Person2("Andrew", 30);
let Mike = new Person2("Mike", 24);
let Frank = new Person2("Freank", 29);

Andrew.greeting();
Mike.greeting();
Frank.greeting();

console.log(Andrew);




// INHERITANCE

class Person3{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greeting(){
        console.log("Hello my name is "+this.firstname+".");
    }
}

class student extends Person3 {
    constructor(studentID, firstname, lastname){
        // super calls constructer function of base class
        super(firstname,lastname);
        this.studentID = studentID;
    }
    studentInfo(){
        console.log(this.studentID + " " + this.firstname +" "+ this.lastname);        
    }
}
let Student = new student(12,"anna","coleman");
Student.greeting();
Student.studentInfo();