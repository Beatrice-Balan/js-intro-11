/* Calculate the average of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it. 

Examples: 
3, 5, 7   -> 5
7, 3, 2  -> 4
5, 5, 5   -> 5
1, 10, 7  -> 6
10, 1, 1  -> 4


PSEUDO CODE: don't start running on the codes, talk through teh steps first
1. Generate 3 random numbers
2. Find max and min numbers among random numbers
3. Calculate and output max - min

*/

// 3 random numbers
let num1 = Math.floor(Math.random() * 10) + 1; 

let num2 = Math.floor(Math.random() * 10) + 1;

let num3 = Math.floor(Math.random() * 10) + 1;

console.log(`Random numbers are = ${num1}, ${num2}, ${num3}`)

// Min & Max
let max = Math.max(num1, num2, num3);

let min = Math.min(num1, num2, num3);

console.log(`Max number is = ${max}. Min number is ${min}.`)

// Difference max - min

let differenceResult = max - min;
console.log(`The difference between max number and min number is ${differenceResult}.`);

































