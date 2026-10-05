/* //1. create a string using double quotes.
let Names : string[]=["kavitha","lavanya","srija"]
console.log(Names);

//2. create a string using single quotes.
let Name :string[] = ['kavitha','srija','priya']
console.log(Name);

//3. create a string using backtick.
let msg: string[] = [`Good Morning`]
console.log(msg);

//4. create a string using backtick print variable value inside it.
let N1 : string = "kavitha";
console.log(`My name is ${N1}`);

//5. find the length of a string.
let text = "Typescript";
console.log(text.length);

//6. convert a string to uppercase using toUppercase().
let Name1 = "typescript"
console.log('uppercase:',Name1.toUpperCase());

//7. convert a string to lowercase using tolowercase().
let Name2 = "TYPESCRIPT"
console.log('lowercase:',Name2.toLowerCase());

//8. get a character from a specific index using charAt().
let Charat = N1.charAt(4);
console.log('charat:',Charat);

//9. find the first position of a character using indexOf().
let data: string = "Playwright";
console.log(data.indexOf("l"));

//10. use indexOf() for a character not found and print the result.
let value: string = "Playwright";
console.log(value.indexOf("z")); // -1

//11. check whether a string starts with a given value using startsWith().
let course: string = "Automation Testing";
console.log(course.startsWith("Auto"));

//12. check whether a string ends with a given value using endsWith().
let courseName: string = "Automation Testing";
console.log(courseName.endsWith("Testing"));

//13. extract characters using substring().
let language: string = "TypeScript";
console.log(language.substring(0, 4));

//14. using substring(0,4) for the string "Automation".
let text1: string = "Automation";
console.log(text1.substring(0, 4)); // Auto

//15. write example using replace(), split(), trim() and concat().

// replace()
let sentence: string = "I like Java";
console.log(sentence.replace("Java", "TypeScript"));
// split()
let fruits: string = "Apple,Mango,Banana";
console.log(fruits.split(","));
// trim()
let userName: string = "   Kavitha   ";
console.log(userName.trim());
// concat()
let firstName: string = "Kavitha";
let lastName: string = "P";
console.log(firstName.concat(" ", lastName));

 */