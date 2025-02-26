let examScore = 59;

// preferred to store value in a variable -> more readable.
// Our goal is not to console.log, it's to store the variable and use them somewhere else
let result = examScore >= 60 ? 'PASS' : 'FAIL'

console.log(result);


// option 2 with result NOT stored in a variable
examScore >= 60 ? console.log('PASS') : console.log('FAIL')


let age = 66;

let retirementAllowed = age >= 65 ? 'YES' : 'NO'

console.log(retirementAllowed)



let gender = 'female';

let fName = gender === 'female' ? 'Jane' : 'John'

console.log(fName)