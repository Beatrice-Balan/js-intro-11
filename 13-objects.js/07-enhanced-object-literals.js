const eat = true;
const sleep = true;

// before ES6
//const cat = {
//    name: 'Silver',
//    eat: eat,
//    sleep: sleep
//};

// with ES6

const cat = {
    name: 'Silver',
    eat,
    sleep
};


console.log(cat); // { name: 'Silver', eat: true, sleep: true }

// example 2

const batchNumber = 11;
const program = 'SDET';

const student1 = {
    batchNumber,
    program,
    fullname: 'John Doe'
}

console.log(student1)