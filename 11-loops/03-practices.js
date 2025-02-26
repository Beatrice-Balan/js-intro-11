const { getRandomNumber } = require('./../utils/MathHelper.js')

/* 8. 
Output all the odd numbers from 1 to random Number
(between 10 and 20) (both inclusive) -> 1 3 5 7 9 …
*/

let r1 = getRandomNumber(10, 20);

console.log(`The random number is ${r1}.`)

for(let i = 1; i <= r1; i++) {
    if (i % 2 !== 0) console.log(i);
}

/* 9. Generate a random number bt 1 to 10 (both inclusive
Find the product of all the numbers starting from 1 to randomly generated random

5       -> 1 * 2 * 3 * 4 * 5 -> 120
6       -> 1 * 2 * 3 * 4 * 5 * 6 -> 720
3       -> 1 * 2 * 3 -> 6
*/

let r2 = getRandomNumber(1, 10);
let product = 1;

console.log(`The random number is ${r2}.`);


for(let i = 1; i <= r2; i++) { 
    product *= i;
}
console.log(`The product is ${product}`);


/* 10. Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/

const { getRandomNumber } = require('./../utils/MathHelper.js')

let r3 = getRandomNumber(1, 10)
let r4 = getRandomNumber(1, 10)

let max = Math.max(r3, r4)
let min = Math.min(r3, r4)

console.log(`Max num = ${max}, Min num = ${min}`)

for(let i = min; i <= max; i++) {
    console.log(i)
}


// option 2

const { getRandomNumber } = require('./../utils/MathHelper.js')

let ran3 = getRandomNumber(1, 10)
let ran4 = getRandomNumber(1, 10)

let numbers = [ran3, ran4].sort((a, b) => a - b)

console.log(`Max num = ${numbers[1]}, Min num = ${numbers[0]}`)

for (let i = numbers[0]; i <= numbers[1]; i++) {
    console.log(i)
}
