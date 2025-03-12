// Before ES6 - only var

if(true) {
    var name = 'John';
}

console.log(name); // John

// AFTER ES6 - let and const added

if(true) {
    let num = 10; // or const
}

console.log(num); // ReferenceError: num is not defined

/* In JavaScript, block scope refers to variables declared with let and const that are confined to the block in which they are defined 
(like inside loops, conditionals, or functions). These variables are not accessible outside the block where they are created.

Key Points about Block Scope:
Defined by {} (Curly Braces):

A block is anything inside curly braces {}—such as in loops, conditionals, or functions.
let and const are Block-scoped:

let and const variables only exist within the block they are declared in, unlike var, which is function-scoped.

Why Block Scope Matters:
    - It helps avoid bugs and confusion by ensuring that variables are not accidentally accessed outside the intended scope.
    - Makes the code cleaner, more predictable, and avoids pollution of the global or function scope.
    - In summary, block-scoped variables (let and const) are confined to the curly braces {} they are declared within 
        and are not accessible outside of those blocks.

*/