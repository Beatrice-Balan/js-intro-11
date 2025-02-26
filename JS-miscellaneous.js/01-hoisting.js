// variable hoisting

let x;
console.log(x); // undefined

console.log(y);

var y = 5;

/*
HOISTING: moving variable  declarations to the top of the file

Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope before the code runs. 
This is why you can sometimes use a variable or function before it's written in the code.

1.  If you declare a variable with var, JavaScript "hoists" it but sets it to undefined
2. With let or const, the variable is hoisted but not initialized. If you try to use it before declaring, you'll get an error:
ReferenceError: Cannot access 'y' before initialization
3. Function declarations are fully hoisted, so you can call the function before it's written.

Arrow functions and function expressions are NOT hoisted in the same way as regular function declarations. 

Function declarations are hoisted completely, meaning you can call them before they are defined.

Function expressions are not fully hoisted because they are assigned to a variable, and only the variable declaration is hoisted—not the function itself.

Arrow functions behave like function expressions. Only the variable declaration is hoisted, not the function.

Pro Tip: Use function for reusable functions and const with arrow functions for smaller, specific tasks. 
Always define functions before calling them to avoid confusion!
*/

//function:

sayHello(); // "Hello!"
sayHello(); // "Hello!"

function sayHello() {
  console.log("Hello!");
}