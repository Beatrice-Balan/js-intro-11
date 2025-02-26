const names= ['Alex', 'John', 'Jane'];

let namesStr1 = names.toString();
let namesStr2 = names.join();
let namesStr3 = names.join('-');
let namesStr4 = names.join('');
let namesStr5 = names.join(', ');


console.log(namesStr1) // Alex,John,Jane
console.log(namesStr2) // Alex,John,Jane
console.log(namesStr3) // Alex-John-Jane
console.log(namesStr4) // AlexJohnJane
console.log(namesStr5) // Alex, John, Jane


const date = [2025, 'Feb', 23]

console.log(date.join('/')) // 2025/Feb/23
console.log(date.reverse().join('/')) // 23/Feb/2025


/* 
join()
TASK: converts array to string with a defined separator, if given (separator must be in quotes)
ARGUMENTS: optional separator
RETURN: returns a string
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY? No
*/



