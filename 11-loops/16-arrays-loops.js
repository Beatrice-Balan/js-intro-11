/* TASK 10
find sum of even indexes -> 19
*/

const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

let sumEvenIndexes = 0;

for (let i = 0; i < numbers.length; i += 2) {
    sumEvenIndexes += numbers[i];
}

console.log(sumEvenIndexes);

/* TASK 11
find product of nummbers that have odd indexes
*/

numbers = [ 3, 4, 7, 3, 2, 2, 7 ]

let productOddIndexes = 1

for (let i = 1; i < numbers.length; i += 2) {
    productOddIndexes *= numbers[i]
}

console.log(productOddIndexes)