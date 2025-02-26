/*
Task01

Requirement:
Write a program that extracts expected values from a given String using JS 
String functions.

"I like apples and oranges"  -> "APPLE"
"JavaScript is not a scripting programming language"   -> "JavaScript"
"I don't like books"  -> "I like books"

let str1 = "I like apples and orange";
let str2 = "JavaScript is not a scripting programming language";
let str3 = "I don't like books";

*/

let str1 = "I like apples and orange";
let str2 = "JavaScript is not a scripting programming language";
let str3 = "I don't like books";

console.log(str1.slice(7, 12).toUpperCase()); // APPLE

console.log(str2.slice(0, 10)); // Java Script

console.log(str3[0] + str3.slice(7)); // I like books
console.log(str3.replace(" don't ", ' ')); // I like books


/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2: let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false

function startsVowel(word) {
    return 'aeiou'.includes(word[0]?.toLowerCase());

*/

let s1 = 'start';

console.log(`The length is = ${s1.length}`); // length
console.log(`The first character is ${s1[0]}`); // first character
console.log(`The last character is ${s1.at(-1)}`);  // last character


function hasVowels(s1) {
    return s1.toLowerCase().includes('a') || 
           s1.toLowerCase().includes('e') || 
           s1.toLowerCase().includes('i') || 
           s1.toLowerCase().includes('o') || 
           s1.toLowerCase().includes('u');
}
console.log(hasVowels('brb'))

let x = "start";
let hasVowel1 = /[aeiou]/i.test(x);
console.log(hasVowel1);

/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"
*/

let s2 = "civic";

let middleChar = s2[Math.floor(s2.length / 2)];

console.log(middleChar)

// method 2

let str = 'start'
console.log(str[(str.length - 1) / 2])

// method 3 using IF/ ELSE
// 123456789

const middleC = word => {
    if(word.length === 0) return ''
    if(word.length % 2 === 0) return word[(word.length / 2) - 1] + word[word.length / 2]
    else return word[Math.floor(word.length / 2)]
}

console.log(middleC('abc')) // b
console.log(middleC('abcd')) // bc
console.log(middleC('')) // ''
console.log(middleC('a')) // a

/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"


Toyota -> yo
*/

let s3 = 'Toyota' // yo

console.log(s3.slice(s3.length / 2 - 1, s3.length / 2 + 1));

// alternative Akin

console.log(s3[s3.length / 2 - 1] + s3[s3.length / 2]);



/*
Task05

Requirement:
Write a program that divides the given String. Assume the length of the 
String will at least be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1: let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = ''

Test Data 2: let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'toyota'

// first 2
console.log(s4.slice(0, 2))

// last 2
console.log(s4.slice(-2))

// other characters

console.log(s4.slice(2, -2));


/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/

s5 = '12ab12';

console.log(s5.slice(0, 2) === s5.slice(-2));

// alternative
console.log(s5.startsWith(s5.slice(0,2)))
console.log(s5.endsWith(s5.slice(-2)))


/*
Task07

Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1: rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2: 23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3: 2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4: elloe

*/

let s61 = '1234';
let s62 = 'Green';

let s61_new = s61.slice(1, s61.length - 1);
let s62_new = s62.slice(1, s62.length - 1);

console.log(s61_new + s62_new)

// alternative BETTER:

console.log(s61.slice(1, -1) + s62.slice(1, -1))


/*
Task08

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1: let s7 = "";
Expected Result 1: false

Test Data 2: let s7 = "red";
Expected Result 2: false

Test Data 3: let s7 = "green";
Expected Result 3: false

Test Data 4: let s7 = "xxbluexx";
Expected Result 4: true

*/

s7 = 'xxbluexx'

console.log(s7.startsWith('xx') && s7.endsWith('xx'));

// alternative

console.log(s7.slice(0, 2) === 'xx' && s7.slice(-2) === 'xx')


/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
*/

let s8 = "I like Apples";

let s8_array = s8.split(' ');

// WRONG, FIX THIS
console.log(`${s8_array.at(-1)} ${s8_array.slice(1, -1)} ${s8_array[0]}`)

// CORRECT - SHOULD BE BUT I COPIED SOMETHING WRONG
let first = s8.slice(0, s8.indexOf(' '))
let last = s8.slice(0, s8.lastIndexOf(' ') + 1);
let middle = s8.slice(0, s8.indexOf(' '), s8.lastIndexOf(' ') + 1)
console.log(last + middle + first)


// ARRAY

const words = s8.split(' ')
let fWord = words[0];
let lWord = words[words.length - 1]


/*
Task10

Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1: let s9 = " Good morning";
Expected Result 1: 2

Test Data 2: let s9 = "Hello    ";
Expected Result 2: 1

Test Data 3: let s9 = "I like Apple";
Expected Result 3: 3

Test Data 4: let s9 = "JavaScript is nice to learn";
Expected Result 4: 5
*/

let s9 = "JavaScript is nice to learn    ";

console.log(s9.trim().split(' ').length);

console.log(s9.trim().split('/\s+/ ').length); // REJECTS: " /\s+/" get rid of the extra spaces in the middle of the words


