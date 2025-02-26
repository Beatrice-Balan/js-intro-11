let pi = Math.PI;
console.log(pi);

console.log(Number.isFinite(Math.PI)); // true -> but it should be false but this is all JS can hold

// blue box = property

// purple box = method

console.log(Math.abs(5)); // 5
console.log(Math.abs(-5)); // 5
// absolute value of a number, always positive

let a1 = Math.abs(3 - 5) - 3; // positive 2 - 3, will return -1
console.log(a1);

let a2 = Math.abs(Math.abs(2 * 5 - 3) -15); // Math.abs(7 -15) = 8
console.log(a2);

// real life : distance is never negative, age difference between 2 people
// find age difference between 2 users

let userAge1 = 20;
let userAge2 = 15;

console.log(`The age difference is ${Math.abs(userAge2 - userAge1)}.`);

// ceil(), floor(), trunc(), round() methods -> approx/ round numbers up or down

console.log(Math.trunc(10.99));  // Output: 10 - returns the integer part of a number (x)
console.log(Math.trunc(10.01)); // Output: 10 - returns the integer part of a number (x)

console.log(Math.round(10.99)); // 11 round to whatever numebr is closer
console.log(Math.round(10.01)); // 10 round to whatever numebr is closer
console.log(Math.round(10.49)); // 10 round to whatever numebr is closer
console.log(Math.round(10.50)); // 11 round to whatever numebr is closer
console.log(Math.round(10.51)); // 11 round to whatever numebr is closer

console.log(Math.round(3.4923)); // 3
console.log(Math.round(3.4999));  // 3

console.log(Math.ceil(10.99)); // 11
console.log(Math.ceil(10.01)); // 11


console.log(Math.floor(10.01)); // 10
console.log(Math.floor(10.99)); // 10

// trunc and floor give the same result. Trunc is not necessarily reccomended, no reason, just not preferred

// pow method
console.log(Math.pow(2,3)); // exponentiation = 2 ** 3 = 8
console.log(Math.pow(5)); // NaN = i didn't give teh second value, so it's pretty much 5 ** undefined = NaN


// square root
console.log(Math.sqrt(64)); // Output: 8 - returns the square root of x
console.log(Math.sqrt(5)); // Output: 2.23606797749979 - returns the square root of x

//show me only 2 digits
console.log(Math.sqrt(5).toFixed(2)); // Output: 2.24 - returns the square root of x


// max(), min() methods
console.log(Math.max(5, 3)); // 5
console.log(Math.max(3.119, 3.1191)); // 3.1191

console.log(Math.min(3, 6, 9, 4)); // 3







