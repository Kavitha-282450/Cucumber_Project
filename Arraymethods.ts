/* // 1. Create a number array with values 4, 5, 9, 2.
let arr:number[]=[4,5,9,2]
console.log(arr);

// 2. Use map() to find square of all elements in an array.
let square = arr.map(function(num){
    return(num*num);
});
console.log(square);

// 3. Use map() with arrow function to multiply each element by 2.
let greet = arr.map(num=>num*2);
console.log(greet);

// 4. Create a number array with values 1, 2, 3, 4, 5, 6.
let arr1:number[]=[1,2,3,4,5,6];
console.log(arr1);

// 5. Use filter() to fetch even numbers from an array.
let evenNumber= arr1.filter(num=>num%2 ===0);
console.log(evenNumber);

// 7. Use reduce() to find sum of all numbers in an array.

let sum = arr1.reduce((total,num) => total+num);
console.log(sum);

// 8. Write reduce() with accumulator and currentValue.
let val =arr1.reduce((accumlator,currentvalue)=>accumlator+currentvalue);
console.log(val); 

// 9. Use some() to check whether array has even number.
let nums = arr1.some(num=>num%2 ===0);
console.log(nums);

// 10. Use every() to check whether all elements are even.
let alleven = arr1.every(num=>num%2 ===0);
console.log(alleven);

// 11. Use for loop to iterate an array.
for (let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

// 12. Use for...of loop to print array values.
for(let value of arr1){
    console.log(value);
}

// 13. Use for...in loop to print array indexes.
for (let index in arr1){
    console.log(index);
}

// 14. Use forEach() with nameless function.
arr1.forEach(function(value){
    console.log(value);
})

// 15. Use forEach() with arrow function.
arr1.forEach(value=>console.log(value)); */