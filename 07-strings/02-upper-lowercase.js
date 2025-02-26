// toLowerCase Method (Instance/ Non Static)

let company = 'TechGlobal';

let companyLower = company.toLowerCase(); // makes it lowercase
console.log(company); // 'TechGlobal'
console.log(companyLower); // 'techglobal'

/*
TASK: it converts the string to lowercase
ARGUMENTS: no arguments
RETURN: it returns a NEW string
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? INSTANCE METHOD!
*/


// toUpperCase Method (Instance/ Non Static)

let course = 'software Engineer in Test';
let courseUpper = course.toUpperCase();

console.log(course);
console.log(courseUpper);

/*
TASK: converts teh sting to upper case version
ARGUMENTS: no args
RETURN: returns a new string
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE? INSTANCE METHOD!
*/

// you can invoke multiple methods one after the other
console.log('BofA'.toLowerCase().toUpperCase()); // BOFA

console.log('Saturday'.toLowerCase().length); // 8


let str = 'Hello';
str.toLocaleLowerCase // for non-english letters (diacritice)