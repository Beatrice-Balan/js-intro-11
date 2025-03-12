/* The global scope in JavaScript refers to the outermost level of scope, where variables, functions, and objects are 
accessible throughout the entire program.

Key Points:
    - Any variable or function declared outside of any function, block, or module automatically belongs to the global scope.
These variables can be accessed and modified from anywhere in the code.

Global Object:
    - In browsers, the global object is window, and in Node.js, it is global.
Variables declared in the global scope become properties of the global object.

Drawbacks of Global Scope:
    - Name Collisions: Multiple scripts may unintentionally overwrite the same global variables.
    - Debugging Issues: Harder to track variable usage and changes.
    - Memory Leaks: Globals persist for the lifetime of the program, potentially using unnecessary resources.
By keeping variables out of the global scope as much as possible, you can write safer and more maintainable code.
*/



// globally scoped examples, all of them can be invoked anywhere in the code

let name = 'John'

const cities = ['Rome', 'Berlin'];

const person = {
    fullname: 'John Doe',
    age: 45
};

const sayHi = () => console.log('Hi')


