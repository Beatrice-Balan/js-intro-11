/* TASK 4
count how many positive numbers you have in the array
*/

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let posNumbersCount = 0;

for(const number of numbers) {
    if(number > 0) posNumbersCount++
}

console.log(posNumbersCount)

// for loop
numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let countPos = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) countPos++
}

console.log(countPos)



/* 
TASK 5
Count how many negative numbers are in this array
*/
numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let negativeNumCount = 0;

for(const number of numbers) {
    if(number < 0) negativeNumCount++
}

console.log(negativeNumCount)


/* TASK 6
How many even numbers are in the array
*/

numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let countEvenNum = 0;

for(const number of numbers) {
    if(number % 2 === 0) countEvenNum++;
}

console.log(countEvenNum);

// for loop
numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

countEvenNum = 0;

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) countEvenNum++;
}

console.log(countEvenNum);


/* TASK 7
Count how many  numbers are odd and positive
*/

numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let countPosOdd = 0;

for(const number of numbers) {
    if(number % 2 !== 0 && number > 0) countPosOdd++
}

console.log(countOddPositive)










