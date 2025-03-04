/* TASK 8
Find sum of all the numbers in the array
find the average of all the numbers
*/

const numbers = [ 3, 4, 7, 3, 2, 2, 7 ]

let sum = 0;

for(const num of numbers) {
    sum += num;
}

console.log(sum);
console.log(sum / numbers.length);

// for each method

numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
sum = 0;

numbers.forEach((number) => sum += number);

console.log(sum);
console.log(sum / numbers.length);

/* TASK 8
find product of all numbers starting with index of 3
*/

numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

let product = 1;

for(let i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log(product);


// using for of loop

numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
product = 1;

for(const num of numbers.slice(3) ) { // numbers.slice(3) returns the array of the nums you want: [ 3, 2, 2, 7 ]
    product *= num;
}

console.log(product);









