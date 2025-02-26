// *** INTERVIEW QUESTION ***
// How do you check if a variable is an array
// Answer: use Array.isArray() to get true or false

const arr = [];

console.log(typeof arr); // if you use typeof you get object

// Array.isArray()
console.log(Array.isArray(arr)); // true

/* 
Array.isArray():

TASK: check if a variable is an instance of Array or not
ARGUMENTS: Yes, one variable to check
RETURN: boolean, true if variable is an Array instance, otherwise false
STATIC or INSTANCE: Static, you invoke it with the prototype name
DOES IT MODIFY ORIGINAL ARRAY? No
*/
console.log(Array.isArray()); // if empty, it will return FALSE
