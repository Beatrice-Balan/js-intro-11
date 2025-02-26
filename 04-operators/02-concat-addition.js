let n1 = 3;
let n2 = '5';
let n3 = 4;
let n4 = '10';

// Addition -> number + string
console.log(n1 + n2); // '35'
console.log (n1 + n3 + n4 + n2); // '7105' add the numbers and concat the strings
console.log (n1 + (n3 + n4) + n2); // '34105'

// Multiplication
console.log(n2 * n1);
console.log(n2 / n1);

console.log(5 * false); // false = 0 so the result is 0
console.log(5 * true); // true = 1, so the result is 1

console.log(5 * ''); // 0
console.log(5 * '    '); //0

console.log('The sum of 3 and 5 = ' + (3 + 5)); // put numbers in paranthesis if you want to do math next to a string
console.log('The sum of 3 and 5 = ' + (5 - 3)); // put numbers in paranthesis if you want to do math next to a string
console.log('The sum of 3 and 5 = ' + 5 - 3); // if no paranthesis, will result in NaN
console.log('The sum of 3 and 5 = ' + 5 * 3); // in this case, for anything besides + and -, you won't need paranthesis, due to order of operations


let today = 'Sunday';
console.log('Today is ' + today); // if use + add space in '' (option 2)
console.log('Today is', today); // you can also use comma, which will add a space. NOT REALLY used (not preferred, option 3)
console.log(`Today is ${today}`); // preferred, option 1