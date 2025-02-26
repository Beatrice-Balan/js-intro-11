const arr = []; // creating an array with array templates
const arr2 = new Array(); // creating an array with Array constructor

// if you use let:
let cities = ['Chicago', 'Miami', 'Des Plains']

/* you can reassign and do something like:
cities = 5; // TypeError
*/

console.log(cities) // 5 if you use let, it's reassigned

// separate
const order1 = {
    productName: 'Phone Screen Protector',
    price: 10.99
}

const order2 = {
    productName: 'Phone Screen Lego',
    price: 100.99
}

// multiple items within one array

const orders = [
    {
        productName: 'Phone Screen Protector',
        price: 10.99
    },
    {
        productName: 'Phone Screen Lego',
        price: 100.99
    }
];

// if you need a specific item, use index to access
console.log(orders[0].price)

// Array of Arrays

const favorites = [
    ['salmon', 'salad']
    ['Amok', 'My name is Red']
    ['Chicago', 'LA', 'Toronto']
    ['Tesla', 'Toyota', 'BMW', 'Honda']
]

favorites.length; // 4
favorites[2].length // 3, length of cities
favorites[1].length // 2, length of movies


// Basics of Arrays
const numbers = [10, 5, 7, -3, 15];

// get the size of the array using length property
let size = numbers.length; //5

console.log(size)

// get the elements from an array using index (indexing starts from 0)
numbers[0]; // 10
numbers[3]; // -3
numbers[-1]; // undefined
numbers[5]; // undefined, we don't have a 5th element

// how to dynamically get first and last elements in an array using prperty access

const names = ['John', 'Jane', 'Max'];

names[0]; // always returns first element
names[names.length - 1];

console.log(names[1.5]); // undefined, decimal indexes are always undefined








// array of functions. NOT COMMON, does not make sense, but it works
const functions = [
    function hi() {
        console.log('Hi')
    },
    function hello() {
        console.log('Hello')
    }
];

functions[0](); // Hi
functions[1](); // Hello


// hi and hello are key values
const funcs = {
    hi: function() {
        console.log('Hi');
    },
    hello: function() {
        console.log('Hello');
    }
}

funcs.hi();
