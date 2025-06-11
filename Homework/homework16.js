
console.log('\n--------TASK01--------\n')
/* Requirement:
Write a function named toInitials() which takes a string argument considered to be full name and returns initials of the given full name.

NOTE: Initials should be separated with a space and followed with a period.
Assume you will always be given first name and last name only. 
*/

const toInitials = fullName => fullName.split(' ').map(name => `${name[0]}.`).join(' ')

console.log(toInitials( "Joe Doe")) // "J. D."
console.log(toInitials( "Alex Reyes")) // "A. R."
console.log(toInitials( "Tom Cruise")) //  "T. C."
console.log(toInitials( "Bruce Willis")) // "B. W."
console.log(toInitials( "Ja Le")) // "J. L."


console.log('\n--------TASK02--------\n')
// Write a function named hasNumbers() which takes a string argument and returns true if there is a number and false if there isn’t. 

// const hasNumbers = str => str.split('').some(char => !isNaN(char) && char !== ' ')
// const hasNumbers = str => /\d/.test(str)

const hasNumbers = str => str.split('').some(char => char >= '0' && char <= '9')

console.log(hasNumbers("")) // false
console.log(hasNumbers("John is 34 years old")) // true
console.log(hasNumbers("Hello 3")) // true
console.log(hasNumbers("125$")) // true
console.log(hasNumbers("   a   ")) // false
console.log(hasNumbers("      ")) // false
console.log(hasNumbers("!@#$%^&*()_+")) // false



console.log('\n--------TASK03--------\n')
// Write a function named elementLength() which takes an array argument and returns the length of each element as a separate array.

// returns each el as a separate array
// const elementLength = arr => arr.map(el => [el.length])

const elementLength = arr => arr.map(el => el.length)

console.log(elementLength( [ "Hello", "World" ] )) // [ 5, 5 ]
console.log(elementLength( [ "Apple", "Banana", "Orange", "Pear" ] )) // [ 5, 6, 6, 4 ]
console.log(elementLength( ["BMW", "Mercedes", "Audi" ] )) // [ 3, 8, 4 ]
console.log(elementLength( [ ] )) // [ ]
console.log(elementLength( [ "Trampoline", "", "Tennis", "Basketball" ] )) // [ 10, 0, 6, 10 ]



console.log('\n--------TASK04--------\n')
/*
Write a function named isArraySumEvenOrOdd() which takes an array of numbers and calculates if the sum of its elements is even or odd.
Note: If the array is empty return even.
*/

const isArraySumEvenOrOdd = arr => (arr.reduce((acc, curr) => acc + curr, 0) % 2 === 0) ? 'even' : 'odd'

console.log(isArraySumEvenOrOdd( [ ] )) // even
console.log(isArraySumEvenOrOdd( [ 0,-1,-5 ] )) // even
console.log(isArraySumEvenOrOdd( [ 7,1, 8,1 ] )) // odd
console.log(isArraySumEvenOrOdd( [ 0,0 ] )) // even
console.log(isArraySumEvenOrOdd( [ 1,1,1,1,1 ] )) // odd



console.log('\n--------TASK05--------\n')
// Write a function named reverse() which takes a string argument and returns the given string reversed. 

const reverse = str => str.split('').reverse().join('')

console.log(reverse("Hello World")) // "dlroW olleH"
console.log(reverse("TechGlobal")) // "labolGhceT"
console.log(reverse("Basketball is fun")) // "nuf si llabteksaB"
console.log(reverse("")) // ""
console.log(reverse("Apples 456")) // "654 selppA"


