// convert string to number

// parseFloat is prerferred to convert string to number

let price = '100';

let newPrice = parseFloat(price) + 10 

console.log(newPrice);

// OR, but not preferred to use Number()

let price1 = '100';

let newPrice1 = Number(price1) + 10 

console.log(newPrice1);

// Convert Number to String
let count = 10;

console.log(count + 5); // 15
console.log(count.toString() + 5) // '105'







