/* 
TASK: 
ARGUMENTS: 
RETURN: 
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? 
*/

// remove extra whitespaces

let city = ' Chicago ';

if (city.trim().length === 7) {
    console.log('test PASSED!')
} else {
    console.log('Test FAILED')
};

// if no Trimming -> the test will return FAILED, because it counts all the whitespaces too


console.log(city.length); // 9
console.log(city.trimStart().length); // 8
console.log(city.trimEnd().length); // 8
console.log(city.trim().length); // 7 -> trims all the random white spaces

/* 
TASK: removes extra spaces before and after your string
ARGUMENTS: No arguments
RETURN: a new string withoth extra spaces
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? Instance
*/

let str = '   Hello ';
let strTrimmed = str.trim();

console.log(str);
console.log(str.length); // 9
console.log(strTrimmed);
console.log(strTrimmed.length); // 5


let greeting = ' Good Morning Dear!  ';
let greetingTrim = greeting.trim();

console.log(greeting);
console.log(greeting.length); // 21
console.log(greetingTrim);
console.log(greetingTrim.length); // 18

// does not remove the white spaces in between words/ characters