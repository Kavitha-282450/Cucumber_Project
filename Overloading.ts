/* //1. Write a function overloading example using display().
function display() : void;
function display(a? : any) : void {
    console.log(a);
}
display();

//2. Create multiple function signatures for display().
function display1() : void;
function display1(num : number) : void;
function display1(text : string) : void;
function display1(num :number, text :string) : void;

//3. Create one implementation for display().
function display1(a?:number|string,b?:string):void{
    console.log(a,b);
    }
    display1(10,'AAA');

//4. Call display() without parameters. // completed Q.no 1.

//5. Call display() with number and string parameters. // completed Q.no 6.

//6. Call display() with string and number parameters.
function display3(a:string,b:number):void{
    console.log(a,b);
}
display3("kavitha",20);

//7. Write a signature with no parameter.
function Greet() :void{
    console.log('kavi');
    
}
Greet();

//8. Write a signature with one number parameter.
function add (num:number) : number{
    return num*num;
}
console.log(add(5));

//9. Write a signature with one string parameter.
function Place(text:string):void {
    console.log(`${text}`);
      }
Place('this is a Playwright');

//10. Write a signature with two parameters.
function princess(a:number,b:string):void{
    console.log(a,b);
    }
    princess(23,'Automation');

//11. Write an example where parameter type is different.
function get(num:number):void;
function get (tex:string):void;
function get (param:number|string):void{
    console.log(`${param}`);
    }
get(100);
get('Princess');

//12. Write an example where parameter count is different.
function get1(id:number):void;
function get1(id:number,isStudent:boolean):void;
function get1(param:number|boolean):void{
    console.log(`${param}`);
}
get1(1212);

//13. Write an example where parameter order is different.
function get2(isStudent:boolean,id:number):void;
function get2(id:number,isStudent:boolean):void;
function get2(param:number|boolean):void{
    console.log(`${param}`);
}
get1(1212);

//14. Write overloaded function signatures using number and string.
function display5(num: number): void;
function display5(text: string): void;
function display5(num: number, text: string): void;
function display5(text: string, num: number): void;

//15. Write one complete function overloading program.
function display5(): void;
function display5(num: number): void;
function display5(text: string): void;
function display5(num: number, text: string): void;
function display5(text: string, num: number): void;

function display5(a?: any, b?: any): void {
    console.log(a, b);
}

display5();
display5(100);
display5("Hello");
display5(100, "Kavitha");
display5("Kavitha", 100);
 */


