
console.log('\n--------TASK01--------\n')

let str1 = '5';
let str2 = '2';

let newStr1 = Number(str1);
let newStr2 = Number(str2);

let sum = newStr1 + newStr2;
let product = newStr1 * newStr2;
let div = newStr1 / newStr2;
let sub = newStr1 - newStr2;
let rem = newStr1 % newStr2;  
let expo = newStr1 ** newStr2;


console.log(`The sum of ${newStr1} and ${newStr2} is = ${sum}`);
console.log(`The product of ${newStr1} and ${newStr2} is = ${product}`);
console.log(`The division of ${newStr1} and ${newStr2} is = ${div}`);
console.log(`The substraction of ${newStr1} and ${newStr2} is = ${sub}`);
console.log(`The remainder of ${newStr1} and ${newStr2} is = ${rem}`);
console.log(`The exponentiation of ${newStr1} and ${newStr2} is = ${expo}`);




console.log('\n--------TASK02--------\n')

let s1 = '200', s2 = '-50';
let new_s1 = parseFloat(s1), new_s2 = parseFloat(s2);

console.log(`The greatest value is = ${Math.max(new_s1, new_s2)}`);
console.log(`The smallest value is = ${Math.min(new_s1, new_s2)}`);
console.log(`The average is = ${(new_s1 + new_s2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(new_s1 - new_s2)}`);


console.log('\n--------TASK03--------\n')

let n_1 = Math.floor(Math.random() * 50) + 1;
let n_2 = Math.floor(Math.random() * 50) + 1;

console.log(`The two random numbers are: ${n_1}, ${n_2}.`);
console.log(`The absolute difference between numbers is = ${Math.abs(n_1 - n_2)}`);



console.log('\n--------TASK04--------\n')

let x1 = Math.floor(Math.random() * 50) + 1;
let x2 = Math.floor(Math.random() * 50) + 1;
let x3 = Math.floor(Math.random() * 50) + 1;
let x4 = Math.floor(Math.random() * 50) + 1;
let x5 = Math.floor(Math.random() * 50) + 1;

console.log(`The random numbers are: ${x1}, ${x2}, ${x3}, ${x4}, ${x5}.`);
console.log(`The max value = ${Math.max(x1, x2, x3, x4, x5)}`);
console.log(`The min value = ${Math.min(x1, x2, x3, x4, x5)}`);


console.log('\n--------TASK05--------\n')

let y1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let y2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
let y3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(`The number 1 = ${y1}`);
console.log(`The number 2 = ${y2}`);
console.log(`The number 3 = ${y3}`);
console.log(`The sum of these numbers is = ${y1 + y2 + y3}`);

console.log('\n--------TASK06--------\n')

let r1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let r2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let r3 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

console.log(`The 3 random numbers are: ${r1}, ${r2}, ${r3}.`);
console.log((r1 > 25) && (r2 > 25) && (r3 > 25));


console.log('\n--------TASK07--------\n')

/*
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output:The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = 'David';

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name = ${name[0]}`);
console.log(`The last character in the name is = ${name.at(-1)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`);



