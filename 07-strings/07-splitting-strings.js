
let str1 = 'Today is Sunday';

const words = str1.split(' ');

console.log(words)

// if you separate from the space it will return an ARRAY


console.log(words[0]); // 'Today'

console.log(words[2].slice(0,3)); // 'Sun' -> word index #2, indexes 0-3, last one not included

// once you turn into an array, you can start using any STRING method with it


let str2 ='+1 (312) 000 0000';

// you want to check the country area code, and see if it's from the US:

console.log(str2.split(' ')); // [ '+1', '(312)', '000', '0000' ]
console.log(str2.split(' ').length); // 4

console.log(str2.split(' ')[0] === '+1'); // true


// example 3 - your separator can be anything

let str3 = 'C:\\Users\\techglobal\\Desktop\\MyFolder';
console.log(str3.split('\\'));

// example 4

let str4 = 'One word or two';

console.log(str4.split('word')); // ['One', 'or two']

let str5 = 'Apple';

console.log(str5.split('')); // [ 'A', 'p', 'p', 'l', 'e' ]


// find how many words are in a string: string.split(' ').length
let countWords = 'I am at school and teaching JS String split method today'.split(' ').length
console.log(countWords)


// REAL EXAMPLE - IDK ERROR

const actualDate ='2025-02-14';
const apDate = actualDate.split('-')
const expectedDate = ${apDate[1]}/${apDate[2]}/$${apDate[0]};

console.log(expectedDate)


/* 
TASK: split the string with the given separator
ARGUMENTS: YES, string or regex separator
RETURN:  returns an array of your splitted substrings
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? INSTANCE!
*/


