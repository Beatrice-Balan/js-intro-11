// LET = CAN be re-assigned
let num1 = 1;

//Reassign the value of num1
num1 = 11;
console.log(num1);

// CONSTANT = CANNOT reasign, it's constant. Below is wrong. 
const num2 = 2;
num2 = 22;
console.log(num2);
//Use for whatever value does NOT change, First month of the year = January. Does not change
// Cannot just DECLARE const. you have to create it and assign it value off the bat = Initialized with value
//You initialize it, and then the value can Never be changed

//Var is not preferred in modern JS, after 2015 let and const became the norm
//Var works like let, and you will prob see it in stuff developed before 2015 (ES6 update)