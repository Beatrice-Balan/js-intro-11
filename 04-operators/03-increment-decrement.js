let age = 25;

//2026
age++;
console.log(age);

//2027
age++;
console.log(age);

//2028
++age; // also an option, pre decrement
console.log(age);


//DECREMENT

let quantity = 10;
quantity--; // post decrement
--quantity; // pre decrement
console.log(quantity);

// Difference between POST and PRE decrement/ increment
let i = 10;

let j = i++; // post: increase i by 1 but not at this moment. Next time I use it, increase it 
//let j = ++i; // post: increase i by 1 right now, so i becomes 11, and j is also 11 since i = 11

console.log(`I value is ${i} and my J value is ${j}.`);

console.log(j);

let count = 25;
count++; // increase by 1 next time i use it. this line is still old value

console.log(count);

let multiplier = 5;
console.log(10 * multiplier++);

console.log(multiplier); // 6


let counter = 5;
let result = counter++; // counter is still 5, result = 5
console.log(++counter * result);

console.log(result);

// post-increment or post-decrement var++ or var--
// will be used with loops