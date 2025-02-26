let company = 'TechGlobal';

company[0]; // 0

console.log(company[0]); // T
console.log(company[8]); // a

let greeting = 'Good Morning';

let firstChar = greeting[0];
let lastChar = greeting[greeting.length - 1];
/* to find last character, always use the -1 [stringName.length - 1]
this is an aditional feature, not a method
- this is the MOST COMMON way to do it
*/
console.log(firstChar); // G
console.log(lastChar); // g


// charAt()
let city = 'Chicago';
console.log(city.charAt(2));// i
console.log(city.charAt(city.length - 1)); // o

// at
let color = 'Purple';
console.log(color.at(0)); // P
console.log(color.at(color.length - 1)); // e

// EDGE CASES -> explains differences between the ways above

let name = 'Max';
console.log(name[-1]); // undefined
console.log(name[3]); // undefined

console.log(name.charAt(-1)); // returns empty string
console.log(name.charAt(3)); // returns empty string

/* Why is the name word crossed?
The word name is 'Deprecated' 
Name was once a reserved a keyword
*/

console.log(name.at(-1)); // x
console.log(name.at(3)); // undefined

console.log(name.at(-1)); // a
console.log(name.at(-2)); // a
console.log(name.at(-3)); // M
console.log(name.at(-4)); // undefined

// the at method also counts backwords using - whatever number. Counts back from the last character

let brand = 'Apple';
let fChar = brand[0];
let lChar = brand.at(-1); // e


charAt()
/* charAt()
TASK: used to retreive a character from a string at a specified index
    NOTE: if the index is not valid for teh string (non existent), it returns 'undefined'
ARGUMENTS: yes, it takes an index
RETURN: returns a character as a string
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? INSTANCE!!
*/


at()
/* at()
TASK: used to retreive a character from a string at a specified index
    NOTE: index can be negative. It counts backwords. So -1 is the last character
    - if the index is not valid, it returns an empty string
ARGUMENTS: yes, it takes an index
RETURN: returns a character as a string
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? INSTANCE!!
*/

let str = 'abcde';
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));
console.log(str.charCodeAt(3));
console.log(str.charCodeAt(4));

let str1 = 'ひらがな';
console.log(str1.charCodeAt(1));
console.log(str1.charCodeAt(2));
console.log(str1.charCodeAt(3)); // 12394, whatever international 
console.log(str1.charCodeAt(4)); // if not found, Nan

charCodeAt() // returns ASCII number of the character









/* 
TASK: 
ARGUMENTS: 
RETURN: 
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? 
*/