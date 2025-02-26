let num1 = 10.4551;
let num2 = 5;
let num3 = 10;

console.log(num1.toFixed(2)); // in the paranthesis you put how many digits you want after "."
console.log(num1.toPrecision(2)); // just give me 2 digits, idc what happens after, just give me the numebr of digits i tell you, it can be anything in ()

console.log((22.252).toFixed(2));
console.log((22.252).toPrecision(2));


let n2 = 5;
let n3 = 10;
console.log(n2 + n3); // 15
console.log(n2.toString() + n3.toString()); // 510, converts numebrs to strings and then it concat

let r1 = Number.isFinite(5); // true
console.log(r1);

//easier:
console.log(Number.isFinite(5));

console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite('Hello')); // false -> pretty much means, this is NaN, so it's not finite

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false
console.log(Number.isInteger(10.21)); // false

// you can use integer if someone enters 10.5 for age, it's not a whole number, so you want to tell them to put it the correct number


console.log(Number.isSafeInteger(9007199254740991)); // true (it's biggest number that can be safely stored)
console.log(Number.isSafeInteger(90071992547409914)); // false, numebr can't be safely stored

console.log(Number.isNaN(5)); // false
console.log(isNaN(5)); // false


console.log(Number.parseInt) // older way
// global function:
parseInt()


console.log(Number.parseInt('10') + 5); // CONVERTS string to number. CANNOT HANDLE DECIMALS
// global function:
parseInt()

console.log(Number.parseFloat('10.5') + 5); // converts string to number AND works with decimals

console.log(parseInt('100') + 1); // 101
console.log(parseInt('100.99') + 1); // 101
console.log(parseFloat('100') + 1); // 101

console.log((5).toString() + 5); // 55




