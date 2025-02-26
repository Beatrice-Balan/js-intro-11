// startsWith() vs endsWith()

let company = 'TechGlobal';
console.log(company.startsWith('T')); // true
console.log(company.startsWith('Tech')); // true
console.log(company.startsWith('TechGlobal')); // true

console.log(company.startsWith('t')); // false
console.log(company.toLowerCase().startsWith('t')); // true

console.log(company.endsWith('l')); // true
console.log(company.endsWith('Global')); // true
console.log(company.endsWith('TechGlobal')); // true

console.log(company.startsWith('') && company.endsWith('')); // true

console.log(company.toUpperCase().startsWith('TECH') && company.toLowerCase().endsWith('l')); // true

/* startsWith() vs endsWith()
TASK: used to check if string starts/ ends with another string
ARGUMENTS: yes, it takes a string to check
RETURN: boolean (true if string starts/ ends with Substring, otehrwise false)
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? INSTANCE
*/


// includes() method

let quote = `Let's do it`;
console.log(quote.includes('')); // true
console.log(quote.includes(' ')); // true
console.log(quote.includes('do')); // true
console.log(quote.includes('let')); // false, chacks for exact match
console.log(quote.includes(''));

/* includes( method)
TASK: checks if string contains another substring
ARGUMENTS: yes, it takes another substring to check
RETURN: boolean, true or false (if string contains Substring or not)
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? Instance!!!
*/


// NOT A COMMON CASE - BUT HERE IT IS:

let address = '123 St Chicago IL 12345';

console.log(address.includes('Chicago')); // true
console.log(address.includes('Chicago', 20)); // false, checks if Chicago is after index 20

console.log(address.startsWith('123')); // true
console.log(address.startsWith('123', 1)); // false, strarts at index 1 which is 2


// search()

let str = 'abcdea';
console.log(str.search('abc')); // 0 -> returns the INDEX
console.log(str.search('d')); // 3 -> returns the INDEX
console.log(str.search('x')); // -1 -> returns the INDEX, can't find it and it goes with -1 fr whatever reason

console.log(str.search('bc')) // 1 -> returns index of the first character
console.log(str.search('bcde')) // 1 -> returns index of the first character

console.log(str.search('badc')) // -1 -> if it's not there, you'll get -1
console.log(str.search(' ')) // -1 -> if it's not there, you'll get -1
console.log(str.search('')) // 0 

console.log(str.search('a')) // 0  -> first index

// indexOf() and lastIdexOf() methods

let today = 'saturday';

console.log(today.indexOf('a')); // 1
console.log(today.lastIndexOf('a')); // 6

console.log(today.lastIndexOf('123')); // -1 (if it doesn't exist: -1)

console.log(today.indexOf('r')); // 4
console.log(today.lastIndexOf('r')); // 4

/* if there is only 1 match of the searched string then:
indexOf & lastIndexOf will return teh same index, always
*/



// Make sure the address has "Street" keyword: alternative to using includes()
// BEFORE ES6

let myAddress = '123 Street Chicago';
console.log(myAddress.indexOf('Street') !== -1); // true


/* indexOf()
TASK:  check if the original string has a substring
ARGUMENTS: yes, it takes a substring
RETURN: returns teh FIRST found index of the matching substring within original string
    Note: if it can't find substring -> returns -1
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? Instance!
*/

/* lastIndexOf()
TASK:  check if the original string has a substring
ARGUMENTS: yes, it takes a substring
RETURN: returns the LAST found index of the matching substring within original string
    Note: if it can't find substring -> returns -1
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? Instance!
*/

console.log('can i can a can'.indexOf('can')); // 0
console.log('can i can a can'.lastIndexOf('can')); // 12 (index of the first c in the last word 'can')

