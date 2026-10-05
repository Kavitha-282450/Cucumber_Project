/*  //1. Create a function sample() with two number parameters
function sample (a:number,b:number) : void {
    console.log(a,b);
}
sample(5,10);

//2. Create a function sample() with one callback parameter
function sample1 (callback:any): void{
    callback();
}


//3. Create a function sample() with callback1:any parameter
function sample2 (callback1:any): void {
    callback1();
}

//4. Create a function sample() with callback1:any and callback2:any
function sample3 (callback1:any,callback2:any): void {
    callback1();
    callback2();
}

//5. Create a callback function named abc()
function abc3(): void {
    console.log('abc function');
}

//6. Create another callback function named def()
function def():void {
    console.log('def function');
}

//7. Pass abc function as argument to sample()
function sample4(callback:any): void {
    callback();
}

function abc(): void {
    console.log('abc function')
}
sample4(abc);

//8. Pass def function as argument to sample()
function sample5(callback:any): void {
    callback();
}

function def1(): void {
    console.log("def function");
}
sample5(def);

//9. Call sample() with 10 and 20 as number arguments
function sample6(a:number,b:number): void {
    console.log(a+b);
}
sample6(20,50);

//10. Call sample(10, 20, abc, def)
function abc1():void {
    console.log("abc function");
}

function def2():void{
    console.log("def function");
}

function sample7(a:number,b:number,callback1:any,callback2:any):void{
    console.log(a+b);
    callback1();
    callback2();
}
   
sample7(10,20,abc1,def2);

//11. Write a callback function that prints a message
function msg():void {
    console.log('this is a callback function');
}
msg();

//12. Write a main function that executes callback later
function main(callback:any):void{
    console.log('main function');
    callback();
}

function message():void {
    console.log('callback function');
}
main(message); 

//13. Example to control execution order using callback
function first(callback:any): void {
    console.log('first task');
    callback();
}

function second (): void {
    console.log('second task');
}
first(second);

//14. Example to reuse the same callback function
function show(): void {
    console.log("Reusable Callback");
}

function sample8(callback: any): void {
    callback();
}

sample8(show);
sample8(show);
sample8(show);

//15. Complete callback function program
function abc2():void {
    console.log("abc function");
}

function def3():void {
    console.log("def function");
}

function sample9(a:number,b:number,callback1:any,callback2:any): void{
    console.log(a+b);
    callback1();
    callback2();
}

sample9(140,30,abc2,def3); */