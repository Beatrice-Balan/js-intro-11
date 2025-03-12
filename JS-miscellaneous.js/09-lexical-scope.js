// "nested" functions

function connect() {
    function greet(name) {
        console.log(`Hello ${name}!`)
    }

    return greet;
};


const innerFunction = connect();

innerFunction('Dude'); // Hello Dude!

console.log(innerFunction('Dude'));
console.log(connect('Dude'));




// LEXICAL SCOPE example

function funcA() {
let varA = 'A'; // var A is protected with Closure

function funcB() {
        let varB ='B'
    console.log(varA); // accessible
    console.log(varB); // accessible
}

funcB();

//console.log(varA); // accessible - prints A
//console.log(varB); // NOT accessible- ReferenceError: varB is not defined

}

// inner function can access variables of outer function
// outer function cannot access variables of inner function

funcA(); // A and then "ReferenceError: varB is not defined"




/*
Lexical Scope:
Lexical scope means that a function can access variables that are defined in the same place (or higher up) in the code.
Basically, the function "knows" about variables based on where it’s written, not where it’s called.
Example:
*/
function outer() {
    let a = 10;
    
    function inner() {
        console.log(a); // Can access a from outer function
    }
    
    inner();
}

outer(); // Output: 10
// The inner() function can access a because a is in its lexical scope (the place where inner() is written).



