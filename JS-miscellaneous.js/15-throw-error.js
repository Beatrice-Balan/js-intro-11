function validateAgeForDL(age) {
    if(age >= 16) return 'Valid!';
    throw new Error(`${age} is allowed for DL!`);
}

try{
let r1  = validateAgeForDL(15);

console.log(r1);
}
catch(error) {
    console.log('Error:', error.message);
}


console.log('Rest of the program!');


// example
const numbers = [ 2, 3, 5, 6 ]

try {
    const max = Math.max(numbers)
    console.log(max)

    if(!max) {
       const error = new Error ('My first way did not work!')
       error.cause = 'Failing on purpose'
       throw error
    }
}
catch(error) {
    console.log('Error message:', error.message); // Error message: My first way did not work!
    console.log('Error name:', error.name); // Error name: Error (sring that represents the name of the error)
    console.log('Error stack:', error.stack); // represents the stack trace, which is the sequence of function calls that led to the error
    console.log('Error cause:', error.cause); // Error cause: Failing on purpose ( allows you to pass another error object that caused the current error)
    const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr);
    console.log(max);
}


const anyError = new Error();

anyError.cause
