/* reduce() 
- method used to reduce an array to a single value by applying a function to 
each element in the array. 

It takes a callback function and an optional initial value.

- original arrays remains intact. returns a new value

Syntax:

array.reduce(function(accumulator, currentValue, index, array) {
  // return the new accumulator value
}, initialValue);

accumulator: It accumulates the result of the callback function after each iteration. 
        It's the value returned from the previous call (or initialValue if provided).

currentValue: The current element being processed in the array.

index (optional): The index of the current element being processed.
array (optional): The array that reduce() was called on.

initialValue (optional): A value to start the accumulation. 
        If not provided, it will use the first element of the array.

*/


// max:10, min: 3, sum: 23, product: 720, count pos: 4, count even: 3, odd: 1

const numbers = [ 3, 6, 10, 4]

let countEven = numbers.reduce((accumulator, current) => {
    if(current % 2 === 0) return accumulator + 1;
    return accumulator
}, 0);

console.log(countEven)

// turnery:

countEven = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc, 0);


// sum of the elements
numbers = [ 3, 6, 10, 4]
let sum = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sum)


// product

numbers = [ 3, 6, 10, 4];
let product = numbers.reduce((acc, curr) => {
    return acc * curr;
}, 1);

product = numbers.reduce((acc, curr) => acc * curr, 1)

console.log(product); // 720

// find max/ min

numbers = [ 3, 6, 10, 4];

let max = numbers.reduce((acc, curr) => {
    if(curr > acc) return curr;
    return acc;
}, -Infinity);

max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity);


console.log(max)

// Task 

// find shortest fruit -> Kiwi

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
let shortestFruit = fruits.reduce((acc, curr) => {
    if(curr.length < acc.length) return curr;
    return acc
})

shortestFruit = fruits.reduce((acc, curr) => curr.length < acc.length ? curr : acc)


// regular for loop

let shortest = fruits[0]; 
// assume the first item is the shortest because you don't know

for(const fruit of fruits) {
    if(fruit.length < shortest.length) shortest = fruit;
}

console.log(shortestFruit)

