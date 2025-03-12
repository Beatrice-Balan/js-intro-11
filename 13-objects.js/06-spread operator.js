// in general, spread operator is used with arrays, not much for arrays
// you will need ... spread for Objects when working with Cypress

// spread operator for arrays

const numbers = [ 5, 10, 20, 15 ];

console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // 20
console.log(Math.min(...numbers)); // 5

// spread Operator for Objects

const batch = {
    number: 11,
    program: 'SDET',
    startDate: 'January 20, 2025',
    address: {
        street: 'street',
        city: 'chicago',
        state: 'IL',
        zip: 12345
    }
};

console.log(batch); // { number: 11, program: 'SDET', startDate: 'January 20, 2025' }
// console.log(...batch); // TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function


const student1 = {
    fname: 'Ayah',
    lname: 'abc',
    ...batch
};

const student2 = {
    ...batch,
    fname: 'Alina',
    lname: 'abc'
};

console.log(student1)
console.log(student2) // different order

/* Output student1:
{
  fname: 'Ayah',
  lname: 'abc',
  number: 11,
  program: 'SDET',
  startDate: 'January 20, 2025'
}
*/

// you can also use a loop to add all the batch info to a new student

const student3 = {
    fname: 'Bea',
    lname: 'abc'
};

for(const key in batch){
    student3[key] = batch[key]
 }

 console.log(student3)

 










