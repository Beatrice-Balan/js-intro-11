// = assignment operator

// Shorthand assignment operators

let num = 5;

// increase num variable by 5

// num = num + 5; -> not preffered

num += 5;

console.log(num);


let n1 = 10; 

n1 *= 2; // n1 = 20

n1 /= 4; // n1 = 20 / 4 -> n1 = 5

n1 **= 3; // 5 ** 3 -> n1 = 125

console.log(n1); // n1 = 125

// example #2

let n2 = 7;

n2 += ++n2; // 7 + 8 = 15

n2 /= 3; // 15 / 3 = 5

console.log(n2++ %3); // n2 is 5 so 5 % 3 -> remainder is 2

// example 3

let n3 = 20;
let n4 = 3;

n3 += (n4 -= 1); // 20 + 2 = 22
--n3; // n3 = 21

console.log(--n3 * ++n4); // (n3=)20 * 4 => 60

// example

let num1 = 6;
let num2 = 4;

//Product
console.log(num1 * num2); // 6 * 4 = 24

//Addition
console.log(num1 + num2); // 6 + 4 = 10

// Division
console.log(num1 / num2); // 6/4 = 1.5

// Substraction
console.log(num1 - num2); // 6 - 4 = 2

// remainder
console.log(num1 % num2); // 4 goes in 6 one time -> 2

// expo
console.log(num1 ** num2); // 6 ** 4 (6 multiplied 4 times) = 1296


// Create variables if you will refer it more than once.


let price = 10;
let quantity = 5;
let total = price * quantity;

console.log(`The initial total is $${total}. The discounted amount is $${total * 0.8}`);


// Area perimeter
let side1 = 5;
let side2 = 8;
let area = side1 * side2;
let perimeter = 2*(side1 + side2);
console.log(`The area of the rectangle is ${area}. The perimeter is ${perimeter}.`)


let side11 = 5;
let side22 = 8;

console.log(`The area of the rectangle is ${side11 * side22}. The perimeter is ${2 * (side11 + side22)}.`);


// salary
let salary = 120000;

console.log(`The monthly salary will be $${salary / 12}.`);
console.log(`The biweekly salary will be $${(salary / 26).toFixed(2)}.`);
console.log(`The weekly salary will be $${(salary / 52).toFixed(2)}.`);