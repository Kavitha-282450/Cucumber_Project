/*  //1. write an if statement to check age is greater than 18.
let age :number = 20;
if (age>18){
    console.log('true')
}

//2. write an if else statement to check voting eligibility.

if (age>18){
    console.log('eligible for voting');
}else{
    console.log('not eligible for voting')
}

//3. write a nested if example with three conditions.
let School: boolean= true;
let College: boolean = false;

if(School){
    console.log('he is school student');
if(College){
    console.log('she is college student');
}else{
   console.log('she is not a college student');
}
}else{
    console.log('he is not a school student');
}


//4.write a switch statement with multiple cases.
let month:number = 13;

switch(month){
    case 1: 
    console.log('jan')
    break;
    case 2: 
    console.log('feb')
    break;
    case 3: 
    console.log('mar')
    break;
    case 4: 
    console.log('apr')
    break;
    case 5: 
    console.log('may')
    break;
    case 6: 
    console.log('jun')
    break;
    case 7: 
    console.log('jul')
    break;
    case 8: 
    console.log('aug')
    break;
    case 9: 
    console.log('sep')
    break;
    case 10: 
    console.log('oct')
    break;
    case 11: 
    console.log('nov')
    break;
    case 12: 
    console.log('dec')
    break;
}

//5. write a switch statement with default cases.
switch(month){
    case 1: 
    console.log('jan')
    break;
    case 2: 
    console.log('feb')
    break;
    case 3: 
    console.log('mar')
    break;
    case 4: 
    console.log('apr')
    break;
    case 5: 
    console.log('may')
    break;
    case 6: 
    console.log('jun')
    break;
    case 7: 
    console.log('jul')
    break;
    case 8: 
    console.log('aug')
    break;
    case 9: 
    console.log('sep')
    break;
    case 10: 
    console.log('oct')
    break;
    case 11: 
    console.log('nov')
    break;
    case 12: 
    console.log('dec')
    break;
default:
    console.log('only for 12 month');
}

//6. Write a while loop to print a number from 1 to 5.
let i : number = 1;
while (i<5){
    console.log(i);
    i++;
}

//7.  Write a do while loop to print a number from 1 to 5.
console.log('do while');
let j : number = 2;
do{
    console.log(j);
    j++;
}while(j<5); 

//8.  Write a for loop to print a number from 1 to 10.
let k : number = 1;
for(let k=1; k<10;k++){
    console.log('kavi');
} 

 //9. Write a for loop using increment.
let l = 3;
for (let l=3; l<10;l++){
    console.log(l);
}

//10. Write a for loop using decrement.
let R = 10;
for (let R=10;R>=1;R--){
    console.log(R);
}  

 //11. Write a for...of loop to print array values.
let Nums: number[]=[10,20,30,40,50,60]
for(let Number of Nums){
    console.log(Number);
}

//12. Write a for...of loop to print string characters.
let Names: string[]=['kavitha','lavanya','srija','priya']
for(let Name of Names){
    console.log(Name);
} 

//13. Write a for...in loop to print object keys.
let user = {
    name : "kavitha",
    age : 25,
    isAdmin :true,
};
for (let key in user){
    console.log(key);
}

//14. Write an example using break statements.
let G: number=2;
for (let G=2;G<=10;G++){
    if (G===6){
        break;
    }
    console.log(G);
}

//15. Write an example using continue statements.
for (let G=0;G<=10;G++){
    if (G===6){
        continue;
    }
    console.log(G);
}
 */