const objects = ['remote', 'watch', 'pen', 'PC', 'Mouse'];

const partial1 = objects.slice(0, 2); // ['remote', 'watch']
const partial2 = objects.slice(1, 4); // ['watch', 'pen', 'PC']
const partial3 = objects.slice(2); // everything after Pen index

console.log(partial1, partial2, partial3) // [ 'remote', 'watch' ] [ 'watch', 'pen', 'PC' ] [ 'pen', 'PC', 'Mouse' ]
console.log(objects) // original is the same
console.log(objects.slice(-2)) // last 2 indexes
console.log(objects.slice(-5, -3)) // [ 'remote', 'watch' ]


console.log(objects.slice(-4, -5)) // [] with slice if the start index is less than end index won't word
console.log(objects.slice(1, 0)) // []


/* 
TASK: retreives partial arrays using indexes
ARGUMENTS: one or more index (start index inclusive, end index exclusive)
RETURN: New array. copy of a section of the array with specified indexes
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? No
*/

console.log([1, 2, 3, 10, 50].slice(undefined, 3)) // if starting point is undefined, then count  will start at 0
console.log([1, 2, 3, 10, 50].slice(1, undefined)) // if ending point is undefined, then count will end at 0
console.log([1, 2, 3, 10, 50].slice(0, 25)) // if you provide a index that's bigger than the end index, it will return till the end of the array


// SPLICE: splice() -> can do everything pop(), push(), shift(), unshift() can do

const names = ['John', 'Jane', 'Alex', 'Max', 'Maria']

//console.log(names.splice(0, 1)) // [ 'John' ] the 
// first arg is index, second arg is count of how many things you want to delete after that index

//names.splice(0, 3);// remove first 3 elements

//console.log(names.splice(2, 0, 'Adam')) // [] only returns removed elements
// first index is the index you want to give to the new element


// remove Jane and Alex and add 'Adam' instead

names.splice(1, 2, 'Adam', 'Omar', 'Alina') // [ 'John', 'Adam', 'Omar', 'Alina', 'Max', 'Maria' ] you can add more than 1 element

console.log(names)

/* 
TASK: removes and/or adds elements
ARGUMENTS: 2 or more args
    1st: index for starting point
    2nd: number of elements you want to remove, if none, then type 0
    3+: the element(s) you want to add in those places, if none, skip it
RETURN: returns the removed elements as an array
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? YES
*/







