// keys are always unique (like variables) but values can be duplicates

const computer = {
    os: 'MacOS',
    color: 'Black',
    memory: '1 TB',
    price: 999.99
};

// Check if computer has RAM info

console.log(computer.ram); // undefined

console.log(Object.keys(computer).includes('ram')) // false - BUT NOT RECCOMENDED, TOO MUCH

// preferred:
console.log(computer.ram === 'undefined') // false


// for in loop - the place to use bracket notation to loop through keys -> object[key]

for(const key in computer) {
    console.log(computer[key]); // retreives values one by one
    console.log(key); // retreives keys one by one
}

console.log('\n-------for...of loop-------\n')

/* for... of loop
for(const x of computer) {
    console.log(x) // TypeError: computer is not iterable
}

If you want to use otehr types of loops, you have to make them arrays:
*/

Object.keys(computer); // keys as an array
Object.values(computer); // values as an array
Object.entries(computer); // key value pairs as a nested array

for(const key of Object.keys(computer)){
    console.log(key) // os color memory price
    console.log(computer[key]) // get values: MacOS Black, 1 TB...
}

for(const value of Object.values(computer)){
    console.log(value) // retrives values one by one
}

console.log('\n-------entries-------\n')

console.log(Object.entries(computer))

for(const entry of Object.entries(computer)){
    console.log(entry) //  retrieves entries one by one: [ 'os', 'MacOS' ], [ 'color', 'Black' ], [ 'memory', '1 TB' ], [ 'price', 999.99 ]
    console.log(entry[0]) // retrieves keys one
    console.log(entry[1]) // retrieves values one
}

// destructure right there

for(const [k, v] of Object.entries(computer)) { // k = key, v = value
    console.log(k);
    console.log(v);
}

// THIS
// [ 'os', 'MacOS' ]
// [ 'color', 'Black' ]
// [ 'memory', '1 TB' ]
// [ 'price', 999.99 ]

/* TURNS INTO THIS:
price
999.99
os
MacOS
color
Black
memory
1 TB
price
999.99
*/



