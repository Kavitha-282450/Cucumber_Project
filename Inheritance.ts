/* //1. create a Parent class named car.
class car {
    name : string;
    price : number;
    colour : string;

    constructor(n:string,p:number,c:string) {
        this.name=n;
        this.price=p;
        this.colour=c;
        
    }
    displayinfo(){
        console.log(`The car name is ${this.name}, and price is ${this.price}, and colour is ${this.colour}`);
        }
    } 
   

//2.Create a child class named BMW that extends car.
class BMW extends car{
    makingyear :number;
    
    constructor(n:string,p:number,c:string,m:number,){
        super(n,p,c);
        this.makingyear=m;
        
    }
    getinfo(){
        console.log(`The making year is ${this.makingyear}`);
        
    }
}
let b=new BMW('M340i',4000000,'block',2026,);
b.getinfo();
b.displayinfo();

//3.Create a child class named Benz that extends car.
class Benz extends car {
    location :string= 'Chennai';
    constructor(n:string,p:number,c:string,l:string){
        super(n,p,c);
        this.location;
    }
    printinfo(){
        console.log(`the location is ${this.location}`);
        }
}
let a=new Benz('M34i',2500000,'block','Chennai');
a.printinfo();

//4. Write a example using extends keyword.
class Teacher {
    name:string;
    Incharge:string;
    salary:number;
constructor(n:string,I:string,s:number){
this.name=n;
this.Incharge=I;
this.salary=s;
}
startof(){
    console.log(`The teacher name is ${this.name}, class incharge is ${this.Incharge},then our salary is ${this.salary}`);
    }
}

//child class
class student extends Teacher{
    sid : string;
    phno : number;
constructor(n:string,I:string,s:number,sid:string,phno:number){
super(n,I,s);
this.sid=sid;
this.phno=phno;
}
getinfo(){
    console.log(`the student id is ${this.sid} student contact number is ${this.phno} `);
    }
}
let t = new student('Jeeva','12th',12000,'cb170',9876543210);
t.getinfo();
t.startof();

//5. Create a parent class with one property.
class Person1 {
    name: string = "Kavitha";
}
let P = new Person1();
console.log(P.name);

//6. Create a child class that inherits parent class property
class Student1 extends Person1 {
}

let s = new Student1();
console.log(s.name);

//7. Create a parent class with one method
class Person2 {
    display(): void {
        console.log("Hello from Parent Class");
    }
}

let p = new Person2();
p.display();

//8. Access parent class method from child class
class Person3 {
    display(): void {
        console.log("Parent Method");
    }
}

class Student3 extends Person3 {
}

let S = new Student3();
S.display();

//9. Use super() to call parent class constructor
class Person4 {
    constructor(public name: string) {
    }
}

class Student4 extends Person4 {
    constructor(name: string) {
        super(name);
    }
}

let st = new Student4("Kavitha");
console.log(st.name);

//10. Use super keyword to call parent class method
class Person5 {
    display(): void {
        console.log("Parent Method");
    }
}

class Student5 extends Person5 {
    display(): void {
        super.display();
        console.log("Child Method");
    }
}

let stu = new Student5();
stu.display();


//11. Write an example for method overriding
class Person6 {
    display(): void {
        console.log("Parent Display");
    }
}
class Student6 extends Person6 {
    display(): void {
        console.log("Child Display");
    }
}

let St = new Student6();
St.display();


//12. Create a public property and access it anywhere
class Employee2 {
    public name: string = "Kavitha";
}

let emp = new Employee2();
console.log(emp.name);

//13. Create a private property and access it only inside the class
class Employee1 {
    private salary: number = 25000;

    showSalary(): void {
        console.log(this.salary);
    }
}
let emp1 = new Employee1();
emp1.showSalary();
// emp.salary; // Error


//14. Create a protected property and access it inside child class
class Employee {
    protected department: string = "IT";
}
class Developer extends Employee {
    showDepartment(): void {
        console.log(this.department);
    }}
let dev = new Developer();
dev.showDepartment();

//15. Complete inheritance program using parent class and child class
class Person {
    name: string;
constructor(name: string) {
        this.name = name;
    }
display(): void {
        console.log("Name:", this.name);
    }
}
class Student extends Person {
    course: string;

constructor(name: string, course: string) {
        super(name);
        this.course = course;
    }

    showDetails(): void {
        console.log("Course:", this.course);
    }
}
let Emp = new Student("Kavitha", "TypeScript");
Emp.display();
Emp.showDetails();
    */