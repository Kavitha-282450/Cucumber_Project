/* //1. create a number array with values 4,5,9,2.
let nums: Number[] = [4,5,9,2];
console.log(nums);

//2.  Use map() to find square of all elements in an array.
let numbers = [1,2,3,4,5,];
let square = numbers.map(nums=>nums*nums);
console.log(square);

//3. Use map() with arrow function to multiply each element by 2.
let square1 = numbers.map(nums=>nums*2);
console.log(square1);

//4. Create a number array with values 1, 2, 3, 4, 5, 6.
let nums1 : number[] = [1,2,3,4,5,6];
console.log(nums1);

//5. Use filter() to fetch even numbers from an array.
let evenNumbers = nums1.filter(nums=>nums %2 ===0);
console.log(evenNumbers);

//6. Print the original array after using filter().
console.log('original array:',nums1);
console.log('filtered array:',evenNumbers);

//7.Use reduce() to find sum of all numbers in an array.
let sum = nums1.reduce((total, num) => total + num, 0);
console.log(sum);

//QUESTIONS:
//1. Create a number array [4, 5, 9, 2] and use map() to return square of each element.
let id:number[]=[4,5,9,2];
let square2 = id.map(function(num){
    return num*num
})
console.log(square2);

//2. Create a number array [1, 2, 3] and use map() to multiply each element by 2.
let id1:number[] = [1,2,3,];
let square3 = id1.map(num=>num*2);
console.log(square3);

//3. Use map() with normal function to transform array values.
let res = id1.map(function(num){
 return num*3
})
console.log(res);

//4. Use map() with anonymous function to transform array values.
let result = numbers.map(function(num) {
    return num + 10;
});
console.log(result); // [11, 12, 13]

//5. Use map() with arrow function to transform array values.
let resul = id1.map(num=>num*4);
console.log(resul);

//6. Create an array [10, 20, 30] and use map() to add 5 to each element.
let res1 :number[] = [10,20,30];
let res2 = res1.map(num=>num+5);
console.log(res2);

//7. Create an array [2, 4, 6, 8] and use map() to divide each element by 2.
let res3 : number[] = [2,4,6,8];
let res4 = res3.map(num=>num / 2);
console.log(res4);

//8. Create an array [1, 2, 3, 4, 5, 6] and use filter() to get even numbers.
let res5 : number[] = [1,2,3,4,5,6];
let evenNumbers1 = res5.filter(nums=>nums %2 ===0);
console.log(evenNumbers1);

//9. Create an array [1, 2, 3, 4, 5, 6] and use filter() to get odd numbers.
let oddNumber = res5.filter(nums=>nums %2 !==0);
console.log(oddNumber);

//10. Use filter() with normal function to fetch even numbers.

function isEven(num: number): boolean {
    return num % 2 === 0;
}
let result1 = res5.filter(isEven);
console.log(result1); // [2, 4, 6]

//11. Use filter() with anonymous function to fetch even numbers
let result2 = res5.filter(function(num) {
    return num % 2 === 0;
});
console.log(result2); // [2, 4, 6]

//12. Use filter() with arrow function to fetch even numbers. */




