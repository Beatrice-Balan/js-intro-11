/*
FALSY VALUES = 0, '', undefined, null, NaN, false

let result = value1 || value2
if value1 is falsy, then result is always value2
if value1 is truthy, then result is Always value1

let result = value1 || value2
if value1 is Undefined OR Null, then result is always value2
if value1 is NOT Undefined OR Null, then result is always value1





let nameInServer; // undefined

let fetchedName = nameInServer ?? 'empty';

console.log(fetchedName);

*/

let nameInServer = null; 

nameInServer = nameInServer ?? 'customer';

console.log(`Dear ${nameInServer}`);