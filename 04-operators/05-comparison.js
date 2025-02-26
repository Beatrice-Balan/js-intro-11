let v1 = 3;
let v2 = '3';
let v3 = 5;
let v4 = '5';

console.log(v1 < v3); // true
console.log(v1 <= v3); // true
console.log(v1 == v3); // false, values are not the same, 3 does not equal 5
console.log(v1 === v3); // false, values AND data types are not equal

console.log(v1 == v2); // true, comparing values only 3 = '3'
console.log(v1 === v2); // false, comparing values 3 = '3' AND data types, number does not equal string

console.log(true == 1);  // true is converted to 1, so 1 = 1
console.log(true === 1);  // false, values are true but boolien vs number is false

// NOT EQUAL: != (loose) and !== (strict)

console.log('Hello' != 'HELLO'); // TRUE 

console.log(3 != '3'); // FALSE, JS converts the string into a number
console.log(3 !== '3'); // TRUE. Strict comparison


console.log('15' == true); // false, string is not a boolean
console.log(); 
console.log(); 

/*
let x = 10
y = 20
z = “10”;

x == z; // true
x === z; // false
y < z; // false
x <= y; // true
x >= z; // true, string converted

y > x;  // true
x >= y; // false
*/

let x = 10;
let y = 20;
let z = '10';

console.log((x >= z) < y); // (true) < 20 -> in this case true will be converted to 1

console.log((10 >= 10) === 20); // false

