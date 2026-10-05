/* //1. Create a variable age with number data type
let age: number = 25;
console.log(age);


//2. Create a variable price with number data type and store a decimal value
let price: number = 99.99;
console.log(price);


//3. Create a variable name with string data type
let Name: string = "Kavitha";
console.log(Name);

//4. Create a greeting using template string
let name1: string = "Kavitha";
let greeting: string = `Hello`;
console.log(greeting);

//5. Create a boolean variable isTester and assign true
let isTester: boolean = true;
console.log(isTester);

//6. Create a boolean variable isAdmin and assign false
let isAdmin: boolean = false;
console.log(isAdmin);

//7. Create an any variable and assign number, string, and boolean values
let data: any = 100;
data = "TypeScript";
data = true;
console.log(data);

//8. Create an unknown variable with string value
let value: unknown = "Hello World";
console.log(value);

//9. Check unknown variable type before using toUpperCase()
let value1: unknown = "Hello World";

if (typeof value1 === "string") {
    console.log(value1.toUpperCase());
}

//10. Write a function greet() with void return type
function greet(): void {
    console.log("Welcome to TypeScript");
}

//11. Create a null variable and assign null
let result: null = null;
console.log(result);

//12. Create an undefined variable and assign undefined
let value2: undefined = undefined;
console.log(value2);

//13. Example for type annotation
let marks: number = 90;
console.log(marks);

//14. Example for type inference
let city = "Chennai"; 
console.log(city);

//15. Create a union type variable that accepts more than one data type
let id: number | string;
id = 101;
id = "EMP101";
console.log(id); */