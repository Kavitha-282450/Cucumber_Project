/* //1. Create a simple interface named Student.
interface Student {
}

//2. Create an interface with regular properties.
interface Student1 {
    name: string;
    age: number;
}

//3. Create an interface with optional property using ?.
interface Student2 {
    name: string;
    age1?: number;
}
let greet: Student2 = {
    name: 'kavitha',
}
console.log(greet);

//4. Create an interface with readonly property.
interface Student3 {
    readonly id: number;
    name: string;
}

let s: Student3 = {
    id: 101,
    name: "Kavitha"
};
console.log(s);
id: 102; // cannot be changed 
console.log(s.id);

//5. Create an interface with one abstract method signature.
interface Student4 {
    display(): void;
}

//6. Create an object based on an interface.
interface Student5 {
    name: string;
    cid: number;
    age: number;
}
let i: Student5 = {
    name: 'priya',
    cid: 789,
    age: 12

}
console.log(i);

//7. Create an interface named Employee with name and salary.
interface Employee {
    name: string;
    salary: number;
}
let emp: Employee = {
    name: 'lavanya,',
    salary: 12000
}
console.log(emp);

//8. Create an interface with method signature getDetails().
interface Employee1 {
    gerDetails(): void;
}

//9. Create one interface and extend it in another interface.
interface Company {
    name: string;
}
interface employee extends Company {
    empname: string;
}

//10. Write an example for interface extends interface.
interface Company {
    name: string;
}
interface employee extends Company {
    empname: string;
}
let c: employee = {
    name: 'infosys',
    empname: 'kavi'
}
console.log(c);

//11. Write an example for class extends class.
class Person {
    name = "Kavitha";
}

class Student6 extends Person {
    age = 22;
}

let s1 = new Student6();
console.log(s1.name);
console.log(s1.age);

//12. Write an example for class implements interface.
interface Student7 {
    name: string;
}

class demo implements Student7 {
    name = "thashvika";
}

let obj = new demo();
console.log(obj.name);

//13. Create a class that implements Student interface. // already completed Q.no 12.

//14. Try to modify readonly property and note the result. // already completed Q.no 4.

//15. Write one complete program using interface, properties, and method signature.
interface Student8 {
    name: string;
    sid: string;
    age: number;
    phno: number;
    getinfo(): void;
}
class da implements Student8 {

    name: string;
    sid: string;
    age: number;
    phno: number;
    salary: string

    constructor(n: string, s: string, age: number, ph: number, sal: string) {
        this.salary = sal
        this.name = n
        this.sid = s
        this.age = age
        this.phno = ph

    }
    getinfo(): void {
        console.log(`the student name is ${this.name} student id is ${this.sid} then age is ${this.age} contact number is ${this.phno} our salary is ${this.salary}`);

    }
}
let d = new da ('AAA','CB17',18,9876543210,'80k');
d.getinfo(); */






