const names = [ 'alex', 'Adam', 'Jane', 'John', 'alexander' ];

names.sort();

console.log(names) // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]

const numbers = [ 1, 40, 15, 20, 2];

/*
numbers.sort()
console.log(numbers) // [ 1, 15, 2, 20, 40 ] treats numbers like a string, ASCII based
*/

numbers.sort((a, b) => a - b) // [ 1, 2, 15, 20, 40 ]

console.log(numbers)

/*
Explanation:
numbers.sort(): The .sort() method sorts the elements of an array.
(a, b) => a - b: This is the comparison function that determines the sorting order.
If a - b is negative, a comes before b.
If a - b is positive, b comes before a.
If a - b is 0, their order remains unchanged.

numbers.sort((a, b) => b - a) // sorts numbers well in descending order
*/


// find the youngest and oldest
const studentAges = [25, 19, 45, 55, 32];

studentAges.sort((a, b) => b - a) // [55, 45, 32, 25, 19]

console.log(`The oldest age is ${studentAges[0]}`) // oldest
console.log(`The youngest age is ${studentAges.at(-1)}`) /// youngest