/* //1. Named function with no parameter and no return type

function greet(){   
    console.log("Hello world")
}
greet();

//2. Named function with parameters and no return type

function world(name:string){
      console.log(name);
 }
world('kavitha');

//3. Named function with parameters and number return type
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(10, 20));

//4. Function multiply() that returns multiplication of two numbers
function multiply(a:number,b:number): number {
    return a*b;
}
console.log(multiply(5,4));

//5. Function sum() that prints addition of two numbers
function sum(a: number, b: number): void {
    console.log(a + b);
}
sum(10, 20);

//6. Named function using rest parameter
function showNumbers(...nums: number[]): void {
    console.log(nums);
}
showNumbers(1, 2, 3, 4, 5);

//7. Function add() using rest parameter to add multiple numbers
function addNumbers(...nums: number[]): number {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}
console.log(addNumbers(10, 20, 30, 40));

//8. Function with optional parameter
function show(name: string, age?: number): void {
    console.log(name, age);
}
show("Kavitha");
show("Kavitha", 25);

//9. display() function with empId, empName, and optional empAge
function displayEmp(empId: number, empName: string, empAge?: number): void {
    console.log(empId, empName, empAge);
}
displayEmp(101, "Kavitha");
displayEmp(102, "Priya", 25);

//10. Function with default parameter
function welcome(name: string = "Guest"): void {
    console.log("Welcome " + name);
}
welcome();
welcome("Kavitha");

//11. Anonymous function and call it
let msg = function (): void {
    console.log("Anonymous Function");
};
msg();

//12. Anonymous function with string return type
let getName = function (): string {
    return "Kavitha";
};
console.log(getName());

//13. Anonymous function using rest parameter
let numbers = function (...nums: number[]): void {
    console.log(nums);
};
numbers(10, 20, 30, 40);

//14. Arrow function with no parameter and no return type
const hello = (): void => {
    console.log("Hello");
};
hello();

//15. Arrow function with parameters and number return type
const addition = (a: number, b: number): number => {
    return a + b;
};
console.log(addition(10, 20)); */