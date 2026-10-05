/* //1. Create an Employee object with name, designation, salary and department.
let Employee = {
empname : 'kavitha',
designation : 'developer',
salary : 12000,
department : 'Information technology',

getEmployeeDetails(){
    console.log(this.empname,this.designation,this.salary,this.department);
},
};
console.log(Employee.getEmployeeDetails());

//2. Creaate student object with stuID, stuName and Grade.
let student = {
 stuID : 101,
 stuName : 'priya',
 grade : "A",

getstudentdetails(){
    console.log(this.stuID,this.stuName,this.grade);
    }
}
console.log(student.getstudentdetails());

//3.Access Employee name using dot notation.
console.log(student.stuName);

//4.Access Employee department using bracket notation.
console.log(student['grade']);

//5. Create an object with name:"benny" and age:12.
let detail = {
 name : "benny",
 age : 12,

 getdetails(){
    console.log(`the person name is ${this.name}and our age is ${this.age}`);
     }
}
console.log(detail.getdetails());

//6. Create an Employee object with performanceRating() method. // already completed

//7. Create an Employee object with getDetails() method. // already completed

//8. Create a Student object with getDetails() method.// already completed

//9. Create a Student object with RankingPercentage() method. // already completed

//10. Create an object using Object type.
let institute = {
    insName : 'Xpertedge',
    number : 9876543210,
    location : 'chennai',
getinstdetails(){
    console.log(`${this.insName} ${this.number} ${this.location}`);
    
}
}
console.log(institute.getinstdetails());// Object type

//11. Create an object using inline type object.
let Ins1 : {
    inName : string;
    Number : number;
    Location : string;
    getInfo : ()=>{}
}={
  inName :'Xpertedge tech',
  Number : 9876543211,
  Location : 'Anna nagar',
  getInfo : function(){
    return (`the institute name is ${this.inName} contact number is ${this.Number} then location is ${this.Location}`);
  },
  };
  console.log(Ins1.getInfo());// Inline type
  
//12. Create an object using type alias.
type book = {
    bookname :string;
    author : string;
    price : number;
   getdetails : ()=>string
}
let book1 :book ={
    bookname : 'kingdom',
    author :'kavi',
    price : 800,
    getdetails: function(){
        return `the book name is ${this.bookname} author name is ${this.author} this book price is ${this.price}`
    }

    }
console.log(book1.getdetails());

//13. Create an object using class and new keyword.
class student1 {
    sname : string;
    sid : number;
    className : string;

    constructor(sname:string,sid:number,className:string) {
        this.sname = sname;
        this.sid = sid;
        this.className = className;
    }
    display(){
        return `the student name is ${this.sname} roll number is ${this.sid} then class name is ${this.className}`
    };
};
let stu = new student1 ("srija",123,"2nd");
console.log(stu.display());

//14. Write a class using constructor. // already completed.

//15. Write a method and call it using object.// already completed.
 */



