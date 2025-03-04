// Instance method

array.forEach(function(element, index, array) {
    // code to execute
  });

  /* Parameters:
element: The current element being processed.
index (optional): The index of the current element.
array (optional): The array forEach() is called on.
  */


const numbers = [ 5, 7, 1, 3, 10 ];

// forEach()

//  written with function declaration
numbers.forEach(function(x) {
    console.log(x)
});

// also written as arrow function
numbers.forEach((x) => console.log(x));


// example
// print all names has 4 characters -> 'Alex', 'John', 'Jane'

const names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria'];

names.forEach(function(name) {
    if(name.length === 4) console.log(name)
})

// arrow function
names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria'];
names.forEach((name) => {
    if(name.length === 4) console.log(name)
})


// task
// find sum of numebrs: 11    -> preferred way to solve it is reduce()
// find product: 30           -> preferred way to solve it is reduce()
// create new array with all nums multiplied by 5 -> preferred way to solve it is filter()

const nums = [5, 3, 2, 1];

const numsMultiplied5 = []
let sum = 0;
let product = 1;

nums.forEach((num) => {
    sum += num;
    product *= num;
    numsMultiplied5.push(num * 5);
})

console.log(sum);
console.log(product);
console.log(numsMultiplied5);