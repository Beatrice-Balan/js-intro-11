let name = 'John';

const nameChars1 = name.split(''); // splits the characters and returns all the characters
console.log(nameChars1) // [ 'J', 'o', 'h', 'n' ]

// iterable object
// does the same thing as split, so it's not used often
const nameChars2 = Array.from(name)
console.log(nameChars2) // [ 'J', 'o', 'h', 'n' ]

/* Array.from()
TASK: creates new array from iterable object
ARGUMENTS: an iterable object
RETURN: new array
STATIC or INSTANCE: static, we call it with array from
DOES IT MODIFY ORIGINAL ITERABLE OBJECT? No
*/

//

const arr1 =[1, 2, 3]; // one way to create an array and the best
const arr2 = new Array('Berlin', 'Oslo', 'Toronto'); // another way to create array
const arr3 = Array.of('John', 'Jane', 'Alex') // one more way to create an array

// arrays can take a mix of data
const arr4 = Array.of(name, null, 5, 10.99)

console.log(Array.isArray(arr1)) // true
console.log(Array.isArray(arr2)) // true
console.log(Array.isArray(arr3)) // true



/* Array.of()
TASK: creates new array with the given elements
ARGUMENTS: yes, items/ elements
RETURN: new array
STATIC or INSTANCE: static, we call it with array of
DOES IT MODIFY ORIGINAL ITEMS? No
*/


// something else, not really used. You're initializing your array with its size, no items

console.log(Array(7)) // [ <7 empty items> ]
console.log(Array(7).length) // 7