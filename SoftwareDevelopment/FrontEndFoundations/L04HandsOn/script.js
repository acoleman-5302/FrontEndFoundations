class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }

    // I am not sure why these are in the starter code. I could find no use for them unless someone wanted to access these variables seperately in the console.
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }

  }

class Manager extends Employee {
    constructor(descriptionOfJob, name,salary,hireDate){
        super(name,salary,hireDate);
        this.descriptionOfJob=descriptionOfJob;
    }
    jobDescription(){
      console.log( this.name +" was hired on "+ this.hireDate+" and recieves a salary of "+ this.salary+ " because she " + this.descriptionOfJob + ".");
    }
}

class Designer extends Employee {
    constructor(experience, name,salary,hireDate){
        super(name,salary,hireDate);
        this.expereince=experience;
    }
    yearExperience(){
        console.log( this.name +" was hired on "+ this.hireDate+" and recieves a salary of "+ this.salary+ " because of her " + this.expereince + ".");
      }

}

class SalesAssociate extends Employee {
    constructor(degrees, name,salary,hireDate){
        super(name,salary,hireDate);
        this.degrees=degrees;
    }
    degreeCompleted(){
        console.log( this.name +" was hired on "+ this.hireDate+" and recieves a salary of "+ this.salary+ " because of her " + this.degrees + ".");
      }

}

//Instances
let ManagerEmployee = new Manager("manages things so good", "Mrs. Manager Lady", "$400", "May 1, 1989");
let DesignerEmpolyee= new Designer("12.5 days of experience", "Fancy Shmancy Desinger Lady", "$400000", "1 day after yesterday");
let SalesAssociateEmployee= new SalesAssociate("PhD in Selling of Things and Assosiates", "Sales Sally", "$4","March 12,2000");

ManagerEmployee.jobDescription();
DesignerEmpolyee.yearExperience();
SalesAssociateEmployee.degreeCompleted();