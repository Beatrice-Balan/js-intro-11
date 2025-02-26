// Create function with Function Declaration

function printHi() {
    console.log('Hi')
}

printHi();
printHi();

// Example 2 

console.log('Make coffee');
console.log('Take shower');
console.log('Drink coffee');
console.log('Head to school');

console.log('Make coffee');
console.log('Take shower');
console.log('Drink coffee');
console.log('Head to school');

console.log('Make coffee');
console.log('Take shower');
console.log('Drink coffee');
console.log('Head to school');

// instead of showing the above 3 times we'll make a function

function runMyDaily() {
console.log('Make coffee');
console.log('Take shower');
console.log('Drink coffee');
console.log('Head to school');
}

// use this to invoke your function however many times you want:
runMyDaily();
runMyDaily();
runMyDaily();

/* FUNCTION WITH ARGUMENT:
Create a function that says Hi *whatever name*
*/

function hiName (name) {
    console.log(`Hi ${name}!`);
}

hiName('John');
hiName('Adam');


let result = hiName('Max');

console.log(result); // undefined -> because it's a "void" function. Does not RETURN anything, just executes the code


// Function declaration with 2 arguments/ parameters
// Take 2 arguments called: greet, name
// function name greetName
// greetName('Hello', 'John') -> should print "Hello, John!"


function greetName (greet, name) {
    console.log(`${greet}, ${name}!`);
}

greetName('Hello', 'Beatrice');
greetName('Good Morning', 'Linda');


// RETURN TYPE FUNCTIONS

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

let r = multiply(2, 5);
console.log(r);

/*
Create a function called: average
Takes 2 arguments/ parameters called: num1, num 2
returns: average of the parameters
*/

// done by Beatrice:
function average(num1, num2) {
    let result = (num1 + num2) / 2;
    return result;
}

let r1 = average(10, 20);
console.log(r1);

// done by Akin:

function avg(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(avg(3,5));

// also test for edge cases to make sure it works with everything
console.log(avg(0,0)); // 0
console.log(avg(-1,-3)); // -2
console.log(avg(5,-3)); // 1


