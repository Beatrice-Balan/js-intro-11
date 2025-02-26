/* RANDOM Number: 
let result = Math.floor(Math.random() * (max - min + 1)) + min; 
let result = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
let result = Math.round(Math.random() * (max - min)) + min;
*/

console.log("\n============TASK1============\n")

/* whatever you have in pharantesis is an argument or parameter so you keep it empty. it tells you it's a function
to know if a function takes an argument you can just look at the info about the function, 
when you hoover over it, it shows you
*/

let r1 = Math.floor(Math.random() * 51);
console.log(r1);
console.log(`The random number * 5 = ${r1 * 5}`);



console.log("\n============TASK2============\n")

/* Write a program that generates two random numbers between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/

let r2 = Math.floor(Math.random() * 11);
let r3 = Math.floor(Math.random() * 11);

let max = Math.max(r2, r3);
let min = Math.min(r2, r3);

console.log(r2, r3);

console.log(`The max number is ${max}. The min number is ${min}. The absolute difference is ${max-min}.`);

// option 2

const rand1 = Math.ceil(Math.random() * (10 - 1 + 1)) + 1 - 1;
const rand2 = Math.ceil(Math.random() * (10 - 1 + 1)) + 1 - 1;

const randMax = Math.max(rand1, rand2);
const randMin = Math.min(rand1, rand2);

// 2 ways to calculate absolute difference using method or just - since we already know the max and min
const absDiff1 = Math.abs(rand1 - rand2);
// OR
const absDiff2 = randMax - randMin;

console.log(rand1, rand2);
console.log(`Min number = ${randMin}`);
console.log(`Max number = ${randMax}`);
console.log(`Difference = ${absDiff1}`);
console.log(`Difference = ${absDiff2}`);


console.log("\n============TASK3============\n")

/* Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result}

*/

let r4 = Math.floor(Math.random() * (100 - 50 + 1)) + 50; 
console.log(r4);
console.log(`The random number % 10 = ${r4 % 10}`);



console.log("\n============TASK4============\n")

// let result = Math.round(Math.random() * (max - min)) + min;

// let result = Math.floor(Math.random() * (max - min + 1)) + min;


/* Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the points will be calculated as below
1st number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

*/


let a1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let a2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let a3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let a4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let a5 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(`The 5 random numbers are: ${a1}, ${a2}, ${a3}, ${a4} and ${a5}.`)

console.log(`The total number of points is: ${(a1 * 5) + (a2 * 4) + (a3 * 3) + (a4 * 2) + (a5 * 1)}`);

// option 2 and MORE READABLE

let score = 0; // make sure you declare a value so numbers can be added

let b1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
score += b1 * 5;

let b2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
score += b2 * 4;

let b3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
score += b3 * 3;

let b4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
score += b4 * 2;

let b5 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

console.log(`The 5 random numbers are: ${b1}, ${b2}, ${b3}, ${b4} and ${b5}.`)
console.log(`Score is: ${score}.`)


console.log("\n============TASK5============\n")

/*
Write a program that generates 4 random numbers as below;
1st number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}

*/

let x1 = Math.floor(Math.random() * 25) + 1
let x2 = Math.floor(Math.random() * (50 - 26 + 1)) + 26;
let x3 = Math.floor(Math.random() * (75 - 51 + 1)) + 51;
let x4 = Math.floor(Math.random() * (100 - 76 + 1)) + 76;

console.log(x1, x2, x3, x4);

let max1 = Math.max(x1, x2, x3, x4);
let min1 = Math.min(x1, x2, x3, x4);

let absDiff = max1 - min1;
let diff1 = Math.abs(x2 - x3);
let average = ((x1 + x2 + x3 + x4) / 4).toFixed(2);

console.log(`Absolute difference between max number ${max1} and min number ${min1} is: ${absDiff}.`);
console.log(`Absolute difference between 2nd and 3rd numebr: ${diff1}.`);
console.log(`Average: ${average}.`);


// OPTION 2 -> well you already know which numbers are lerger and smaller. no need to do MAX and MIN or Math.abs

let y1 = Math.floor(Math.random() * 25) + 1;
let y2 = Math.floor(Math.random() * (50 - 26 + 1)) + 26;
let y3 = Math.floor(Math.random() * (75 - 51 + 1)) + 51;
let y4 = Math.floor(Math.random() * (100 - 76 + 1)) + 76;

console.log(y1, y2, y3, y4);

let max_minDiff = y4 - y1; // you know which one is larger so just do the difference
let diff2_3 = y3 - y2; // you know which one is larger, so no need for Math.abs
let average2 = (y1 + y2 + y3 + y4) / 4;

console.log(`Absolute difference between max number ${y4} and min number ${y1} is: ${max_minDiff}.`);
console.log(`Absolute difference between 2nd and 3rd number: ${diff2_3}.`);
console.log(`Average: ${average2}`);
















