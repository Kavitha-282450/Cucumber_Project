/* //1. Create a simple class with properties.
class Employee {
  empId: number = 123;
  empName: string = 'A'
}

//2. Create a class with constructor.
class Student {
  constructor() {
    console.log("Constructor Called");
  }
}

//3. Assign values to class properties using constructor.
class Student1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getdetails(){
    (`the student name is ${this.name} our age is ${this.age}`)
  }
}
let stu1 = new Student1 ('kavitha',25)
console.log(stu1);


//4. Create an object for a class.
class Car {
  brand: string = "Toyota";
}

let car1 = new Car();
console.log(car1.brand);

//5. Create a class with one method.
class Calculator {
  add() {
    console.log("Addition Method");
  }
}
let calc = new Calculator();
calc.add();

//6. Call a method using object. // already completed Qus.5

//7. Create a readonly property inside a class. //completed Qus.8

//8. Try to modify readonly property and note the result.
class Person {
  readonly id: number = 101;//Cannot assign to 'id'
}
let p1 = new Person();

//9. Create an optional property using ? symbol.
class Employee1 {
  name: string;
  department?: string;

  constructor(name: string, department?:string) {
    this.name = name;
    this.department = department;
  }
}
let emp = new Employee1("Priya");
console.log(emp);

//10. Create a static variable inside a class.
class Company {
  static companyName: string = "ABC Technologies";
}

//11. Access static variable using class name.
class Company1 {
  static companyName: string = "ABC Technologies";
}
console.log(Company1.companyName);

//12. Create a static method inside a class.
class Maths {
  static square(num: number): number {
    return num * num;
  }
}

//13. Access static method using class name.
class Maths1 {
  static square(num: number): number {
    return num * num;
  }
}

console.log(Maths1.square(5));

//14. Write a constructor overloading example using multiple signatures and single implementation.
class Employee2 {
  name: string;
  age: number;

  constructor(name: string);
  constructor(name: string, age: number);

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age ?? 0;
  }
}

let emp1 = new Employee2("srija");
let emp2 = new Employee2("Kavitha", 23);

console.log(emp1);
console.log(emp2);

//15. Use nullish coalescing operator ?? to assign default age value.
let age: number | null = null;

let finalAge = age ?? 18;

console.log(finalAge); // 18 




  */