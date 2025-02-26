// String

let fullName = 'John Doe';
console.log(fullName);

console.log(typeof fullName); // typeof = tells you what type your variable is (string, number, boolien etc)

let typeOf = ''; // -> empty string
console.log(typeof 'Hello'); // -> you can check anything by logging and checking in the same row

// NUMBERS
let numberOfStudents = 10;  // whole number
let subscriptionPrice = 15.99;    // decimal number

console.log(numberOfStudents);
console.log(subscriptionPrice);

console.log(typeof numberOfStudents);

console.log('5' + '5');
console.log('5' + 5);
console.log(5 + 5);

// BigInt (add a simple n at the end of the huge number or use BigInt function)

let biggestNumber = Number.MAX_SAFE_INTEGER; // safest big number I can have in JS
let smallestNumber = Number.MIN_SAFE_INTEGER; // smallest number i can store SAFELY in a number value

console.log(biggestNumber); // 9007199254740991
console.log(smallestNumber); //-9007199254740991

let number1 = 90071992547409988888888888888n;
console.log(number1);

let number3 = BigInt('88888888888888888888888888888888');
console.log(number3);
console.log(typeof number3); // type of number will be bigint

// bigint math -> you can only add bigint + bigint, otherwise error


// Boolean

let b1 = true;
let b2 = false;

console.log(b1);
console.log(b2); 

console.log(typeof b1);
console.log(typeof b2); 

let age = 14;
let allowed = age >= 16; // allowed to get a DL

console.log(allowed);

if (allowed) {
    console.log('You are allowed to get a DL.')
} else {
    console.log(`You are too young to get a DL. You are only ${age} years old.`)
}


console.log(typeof (5 === 5)); // boolean true
console.log(typeof ('hi' === 'Hi')); // boolean false

let today;
console.log(today); // undefined
console.log( typeof today); // undefined

// null

let SSN = null;
console.log(SSN);  // null
console.log(typeof SSN);  // object

// SYMBOL
let s1 = Symbol('Foo');
let s2 = Symbol('SOS');

console.log(s2); // Symbol(SOS)
console.log(typeof s2); // symbol